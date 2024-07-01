import React, { useState } from 'react';
import { Container, Typography, Button, IconButton, TextField, Grid, Box, Card, CardContent, CardActions } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => (
  <Card variant="outlined" sx={{ mb: 2, bgcolor: 'background.paper', color: 'text.primary' }}>
    <CardContent>
      <Typography variant="h5">{item.name}</Typography>
      <Typography variant="body1">Preço: ${item.price}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <IconButton onClick={() => onDecrease(item.id)}>
          <Remove />
        </IconButton>
        <Typography variant="body1" sx={{ mx: 2 }}>{item.quantity}</Typography>
        <IconButton onClick={() => onIncrease(item.id)}>
          <Add />
        </IconButton>
      </Box>
    </CardContent>
    <CardActions>
      <Button variant="contained" color="secondary" onClick={() => onRemove(item.id)} startIcon={<Delete />}>
        Remover
      </Button>
    </CardActions>
  </Card>
);

const CheckoutForm = ({ onSubmit }) => (
  <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
    <Typography variant="h4" gutterBottom>Informações Pessoais</Typography>
    <TextField fullWidth label="Nome" name="name" required sx={{ mb: 2 }} />
    <TextField fullWidth label="Email" name="email" required sx={{ mb: 2 }} />
    <Typography variant="h4" gutterBottom>Endereço</Typography>
    <TextField fullWidth label="Endereço" name="address" required sx={{ mb: 2 }} />
    <TextField fullWidth label="Cidade" name="city" required sx={{ mb: 2 }} />
    <TextField fullWidth label="CEP" name="zip" required sx={{ mb: 2 }} />
    <Typography variant="h4" gutterBottom>Forma de Pagamento</Typography>
    <TextField fullWidth label="Cartão de Crédito" name="card" required sx={{ mb: 2 }} />
    <Button type="submit" variant="contained" color="primary">Finalizar Compra</Button>
  </Box>
);

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Produto 1', price: 100, quantity: 1 },
    { id: 2, name: 'Produto 2', price: 200, quantity: 1 }
  ]);

  const [checkout, setCheckout] = useState(false);

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleIncrease = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrease = (id) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    alert('Compra Finalizada!');
    setCheckout(false);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom sx={{ mt: 3, color: 'text.primary' }}>Carrinho de Compras</Typography>
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={handleRemove}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      ))}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => alert('Continuar Comprando')}>
            Continuar Comprando
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={() => setCheckout(true)}>
            Finalizar Compra
          </Button>
        </Grid>
      </Grid>
      {checkout && <CheckoutForm onSubmit={handleCheckout} />}
    </Container>
  );
};

export default Cart;
