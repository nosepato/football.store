import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    tamanho: 'P',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    formaPagamento: 'Cartão de Crédito'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleCepChange = async (e) => {
    const cep = e.target.value;
    setForm({
      ...form,
      cep
    });

    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const { uf, localidade, bairro, logradouro } = response.data;

        setForm({
          ...form,
          cep,
          estado: uf,
          cidade: localidade,
          bairro,
          rua: logradouro,
        });
      } catch (error) {
        console.error('Erro ao buscar endereço:', error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
      </div>
      <div>
        <label>Telefone:</label>
        <input type="tel" name="telefone" value={form.telefone} onChange={handleChange} />
      </div>
      <div>
        <label>Tamanho:</label>
        <select name="tamanho" value={form.tamanho} onChange={handleChange}>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>
      </div>
      <h3>Endereço:</h3>
      <div>
        <label>CEP:</label>
        <input type="text" name="cep" value={form.cep} onChange={handleCepChange} required />
      </div>
      <div>
        <label>Estado:</label>
        <input type="text" name="estado" value={form.estado} onChange={handleChange} required />
      </div>
      <div>
        <label>Cidade:</label>
        <input type="text" name="cidade" value={form.cidade} onChange={handleChange} required />
      </div>
      <div>
        <label>Bairro:</label>
        <input type="text" name="bairro" value={form.bairro} onChange={handleChange} required />
      </div>
      <div>
        <label>Rua:</label>
        <input type="text" name="rua" value={form.rua} onChange={handleChange} required />
      </div>
      <div>
        <label>Número:</label>
        <input type="text" name="numero" value={form.numero} onChange={handleChange} required />
      </div>
      <div>
        <label>Complemento:</label>
        <input type="text" name="complemento" value={form.complemento} onChange={handleChange} />
      </div>
      <div>
        <label>Forma de Pagamento:</label>
        <select name="formaPagamento" value={form.formaPagamento} onChange={handleChange} required>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Boleto">Boleto</option>
          <option value="Pix">Pix</option>
          <option value="Transferência Bancária">Transferência Bancária</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
