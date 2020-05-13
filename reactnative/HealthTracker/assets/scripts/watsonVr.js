import Base64 from './base64';

const watsonRecognition = (imageFile, apiKey, url, modelId) => new Promise((resolve, reject) => {
  const body = new FormData();
  body.append('images_file', {
    name: imageFile.fileName,
    type: imageFile.type,
    uri: imageFile.uri,
  });
  body.append('classifier_ids', modelId);
  body.append('threshold', 0.0);
  const iam_apikey_encoded = Base64.btoa(`apikey:${apiKey}`);
  const watsonUrl = `${url}/v3/classify?version=2018-03-19`;
  fetch(watsonUrl, {
    headers: {
      Authorization: `Basic ${iam_apikey_encoded}`,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    method: 'POST',
    body,
  })
    .then(res => res.json())
    .then((data) => {
      const results = data.images[0].classifiers[0].classes;
      resolve(results);
    })
    .catch((err) => {
      reject(err);
    });
});

export default watsonRecognition;
