'use strict';

const error = text => {
  return { error: text };
};
const id = message => message.id != null;
const data = message => message.data != null;
const attributes = message => message.attributes != null;
const isObject = value => value && typeof value === 'object' && value.constructor === Object;

const verifyBasicStructure = message => {
  if (!message) {
    return error('no message given');
  }
  if (!id(message)) {
    return error('message missing id');
  }
  if (!data(message)) {
    return error('message missing data');
  }
  if (!attributes(message)) {
    return error('message missing attributes');
  }
  if (!isObject(message.attributes)) {
    return error('attributes are invalid type');
  }
  return message;
};

const parseData = message => {
  try {
    message.data = JSON.parse(message.data);
  } catch (e) {
    message = error(e.message);
  }
  return message;
};

export default message => {
  message = verifyBasicStructure(message);
  message = !message.error ? parseData(message) : message;
  return message;
};
