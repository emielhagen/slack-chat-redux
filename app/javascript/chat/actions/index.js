export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';
export const CHANNEL_POSTED = 'CHANNEL_POSTED';

// TODO: add and export your own actions
export function fetchMessages(channel) {
  const promise = fetch(`/api/v1/channels/${channel}/messages`, { credentials: "same-origin" })
    .then(response => response.json());
    return {
      type: FETCH_MESSAGES,
      payload: promise
    }
}

export function submitMessage(content, channel) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const body = { content: content };
  const promise = fetch(`/api/v1/channels/${channel}/messages`, {
    method: 'POST',
    headers: {
      'X-CSRF-Token': csrfToken,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: MESSAGE_POSTED,
    payload: promise
  }
}

export function appendMessage(message) {
  return {
    type: MESSAGE_POSTED,
    payload: message
  }
}

export function submitChannel(channel) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const body = { name: channel };
  const promise = fetch(`/api/v1/channels`, {
    method: 'POST',
    headers: {
      'X-CSRF-Token': csrfToken,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CHANNEL_POSTED,
    payload: promise
  }
}
