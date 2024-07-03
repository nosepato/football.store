import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, IconButton, TextField, Grid, Box, Card, CardContent, CardActions, MenuItem, Select } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import camisadorela1 from '../images/camisadoreal1.jpg'
import camisadoreal2 from '../images/camisadoreal2.jpg'

const theme = createTheme({
  palette: {
    Green: {
      main: '#4CAF50'
    }
  }
});

const CartItem = ({ item, onRemove, onIncrease, onDecrease, onSizeChange }) => (
  <Card variant="outlined" sx={{ mb: 2, bgcolor: 'background.paper', color: 'text.primary' }}>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item>
          <img src={item.image} alt={item.name} style={{ width: 100, height: 100 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            <IconButton onClick={() => onDecrease(item.id)}>
              <Remove />
            </IconButton>
            <Typography variant="body1" sx={{ mx: 2 }}>{item.quantity}</Typography>
            <IconButton onClick={() => onIncrease(item.id)}>
              <Add />
            </IconButton>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="body1">Preço: R$ {item.price.toFixed(2)}</Typography>
          <Select
            value={item.size}
            onChange={(e) => onSizeChange(item.id, e.target.value)}
            displayEmpty
            sx={{ mt: 2, width: 120 }}
          >
            <MenuItem value="" disabled>
              Tamanho
            </MenuItem>
            <MenuItem value="P">P</MenuItem>
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="G">G</MenuItem>
            <MenuItem value="GG">GG</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Button variant="contained" color="secondary" onClick={() => onRemove(item.id)} startIcon={<Delete />}>
        Remover
      </Button>
    </CardActions>
  </Card>
);

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    { id: 1, name: 'Camisa Torcedor Real Madrid I 2023/24 Masculina', price: 120, quantity: 1, size: '', image: camisadorela1 },
    { id: 2, name: 'Camisa Torcedor Real Madrid II 2023/24 Masculina', price: 120, quantity: 1, size: '', image: camisadoreal2 }
  ]);

  const [checkout, setCheckout] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    formaPagamento: ''
  });
  
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalValue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalValue);
  }, [cart]);

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleIncrease = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrease = (id) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const handleSizeChange = (id, size) => {
    setCart(cart.map(item => item.id === id ? { ...item, size } : item));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCepChange = async (e) => {
    const cep = e.target.value;
    setFormData({ ...formData, cep });

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setFormData({
          ...formData,
          estado: data.uf,
          cidade: data.localidade,
          bairro: data.bairro,
          rua: data.logradouro
        });
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    console.log('Pedido enviado!', formData);
    alert('Pedido enviado!');
    setCheckout(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ backgroundColor: '#cfcfcf', minHeight: '74vh' }}>
        <Typography variant="h2" gutterBottom sx={{ mt: 3, color: 'text.primary', fontSize: '3rem', fontWeight: 'normal' }}>Finalizar pedido</Typography>
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onSizeChange={handleSizeChange}
          />
        ))}
        <Typography variant="h5" sx={{ mt: 2, color: 'text.primary' }}>
          Valor Total: R$ {total.toFixed(2)}
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
              Continuar Comprando
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ backgroundColor: 'Green.main', '&:hover': { backgroundColor: 'Green.main' } }} onClick={() => setCheckout(true)}>
              Finalizar Compra
            </Button>
          </Grid>
        </Grid>
        {checkout && (
          <Box component="form" onSubmit={handleCheckout} sx={{ mt: 3 }}>
            <Typography variant="h4" gutterBottom>Informações Pessoais</Typography>
            <TextField fullWidth label="Nome" name="nome" required sx={{ mb: 2 }} value={formData.nome} onChange={handleChange} />
            <TextField fullWidth label="Telefone" name="telefone" required sx={{ mb: 2 }} value={formData.telefone} onChange={handleChange} />
            
            <Typography variant="h4" gutterBottom>Endereço</Typography>
            <TextField fullWidth label="CEP" name="cep" required sx={{ mb: 2 }} value={formData.cep} onChange={handleCepChange} />
            <TextField fullWidth label="Estado" name="estado" required sx={{ mb: 2 }} value={formData.estado} onChange={handleChange} />
            <TextField fullWidth label="Cidade" name="cidade" required sx={{ mb: 2 }} value={formData.cidade} onChange={handleChange} />
            <TextField fullWidth label="Bairro" name="bairro" required sx={{ mb: 2 }} value={formData.bairro} onChange={handleChange} />
            <TextField fullWidth label="Rua" name="rua" required sx={{ mb: 2 }} value={formData.rua} onChange={handleChange} />
            <TextField fullWidth label="Número" name="numero" required sx={{ mb: 2 }} value={formData.numero} onChange={handleChange} />
            <TextField fullWidth label="Complemento" name="complemento" sx={{ mb: 2 }} value={formData.complemento} onChange={handleChange} />
            
            <Typography variant="h4" gutterBottom>Forma de Pagamento</Typography>
            <TextField
              select
              fullWidth
              label="Forma de Pagamento"
              name="formaPagamento"
              required
              sx={{ mb: 2 }}
              value={formData.formaPagamento}
              onChange={handleChange}
            >
              <MenuItem value="Cartão">Cartão</MenuItem>
              <MenuItem value="Pix">Pix</MenuItem>
              <MenuItem value="Dinheiro">Dinheiro</MenuItem>
            </TextField>

            <Button type="submit" variant="contained" sx={{ backgroundColor: 'Green.main', '&:hover': { backgroundColor: 'Green.main' } }}>Enviar pedido</Button>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Cart;
