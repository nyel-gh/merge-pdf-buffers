const hummus = require('hummus');
const memoryStreams = require('memory-streams');

/**
 * Merges an array of PDF buffers into one single PDF buffer 
 * 
 * @param {Buffer[]} buffers - a list of PDF buffers to be merged
 * 
 * @returns {Buffer} merged pdf buffer
 */
exports.merge = async buffers => {
  const [first] = buffers;

  const outStream = new memoryStreams.WritableStream();
  const firstPdfStream = new hummus.PDFRStreamForBuffer(first);

  const pdfWriter = hummus.createWriterToModify(
    firstPdfStream,
    new hummus.PDFStreamForResponse(outStream),
  );

  buffers.shift();
  buffers.map(buffer => {
    const newPdfStream = new hummus.PDFRStreamForBuffer(buffer);
    pdfWriter.appendPDFPagesFromPDF(newPdfStream);
  });

  pdfWriter.end();
  return outStream.toBuffer();
};