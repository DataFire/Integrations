module.exports = spec => {
  spec.paths['/info.0.json'].get.operationId = 'getLatestComic';
  spec.paths['/{comicId}/info.0.json'].get.operationId = 'getComic';
}
