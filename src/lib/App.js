export const sendContactForm = async (data) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'Application/json',
      Accept: 'application/jsons',
    },
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send message');
    return res.json();
  });

export const sendContactForm2 = async (data) =>
  fetch('/api/contact2', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'Application/json',
      Accept: 'application/jsons',
    },
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send message');
    return res.json();
  });
