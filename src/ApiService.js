// frontend/src/ApiService.js
export async function fetchPatrimoine() {
    const response = await fetch('http://localhost:5000/api/patrimoine');
    const data = await response.json();
    return data;
  }
  
  export async function updatePatrimoine(newData) {
    const response = await fetch('http://localhost:5000/api/patrimoine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    return await response.json();
  }
  