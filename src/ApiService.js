// frontend/src/ApiService.js
export async function fetchPatrimoine() {
  const response = await fetch('https://backend-patrimoine-2.onrender.com');
  const data = await response.json();
  return data;
}

  
  export async function updatePatrimoine(newData) {
    const response = await fetch('https://backend-patrimoine-2.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    return await response.json();
  }
  