const axios = require('axios');
const test = async () => {
  try {
    let res = await axios.post('http://localhost:4000/notes', { title: "Test Note", content: "This is a test" });
    console.log('POST /notes:', res.data);
    res = await axios.get('http://localhost:4000/notes');
    console.log('GET /notes:', res.data);
    const id = res.data[0].id;
    res = await axios.delete(`http://localhost:4000/notes/${id}`);
    console.log(`DELETE /notes/${id}:`, res.data);
  } catch (err) { console.error(err.response ? err.response.data : err.message); }
};
test();
