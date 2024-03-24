const App = () => {
  const [pro, setPro] = React.useState([]);
  const [form, setForm] = React.useState({
    name: '',
    price: 0
  });
  const [update, setUpdate] = React.useState(false);
  const [updatesProduct, setUpdatesProduct] = React.useState({
    name: '',
    price: 0
  });
  const [productIdToUpdate, setProductIdToUpdate] = React.useState(null);
const headers= new Headers();
headers.append('Content-Type', 'application/json');
//headers.append('api_key','1234567')
const apiKey='1234567';
const queryParams = `?api_key=${apiKey}`;
  React.useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch('/api/product'+queryParams)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPro(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  function updateForm(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function updates(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUpdatesProduct({ ...updatesProduct, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.price)
      return;

    fetch('/api/product'+queryParams, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        fetchProducts();
        setForm({ name: '', price: 0 });
        console.log(data);
      });
  }

  function deleteProduct(Id) {
    fetch(`/api/product/${Id}`+queryParams, {
      method: 'DELETE',

    }).then(res => res.json()).then(data => {
      fetchProducts();
      console.log(data)
    })
  }

  function toggleUpdate(productId) {
    setProductIdToUpdate(productId);
    setUpdate(!update);
  }

  function updateProduct(Id, product) {
    fetch(`/api/product/${Id}`+queryParams, {
      method: 'PUT',
       headers: headers,
      body: JSON.stringify(product)
    }).then(res => res.json()).then(data => {
      fetchProducts();
      console.log(data)
    })
  }

  function updateProductName(Id, name) {
    fetch(`/api/product/${Id}`+queryParams, {
      method: 'PATCH',
       headers: headers,
      body: JSON.stringify({
        ...form,
        name
      })
    }).then(res => res.json()).then(data => {
      fetchProducts();
      console.log(data)
    })
  }

  return (
    <>
      <h1>Products fetched details</h1>
      <ul>
        {pro.map((product) => (
          <li key={product._id}>
            {product.name}: {product.price}
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
            <button onClick={() => toggleUpdate(product._id)}>Toggle Update</button>
            {update && productIdToUpdate === product._id &&
              <>
                <input type='text' name='name' value={updatesProduct.name || ''} onChange={updates} />
                <input type="number" name='price' step='5' min={updatesProduct.price || 0} max="20" value={updatesProduct.price || ''} onChange={updates} />
                <button onClick={() => updateProduct(product._id, updatesProduct)}>Update</button>
                <button onClick={() => updateProductName(product._id, updatesProduct.name)}>UpdateByName</button>
              </>
            }
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={form.name} onChange={updateForm} />
        <input type="number" name='price' step='5' min={form.price} max="20" value={form.price} onChange={updateForm} />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);


 //ReactDOM.render(<App/>,document.getElementById('app'))
