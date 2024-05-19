<?php
// Conexão com o banco de dados (substitua pelas suas credenciais)
$host = "localhost";
$username = "root";
$password = "";
$database = "teste";

$conn = new mysqli($host, $username, $password, $database);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Recupera os dados do formulário
$nome = $_POST['nome']; // Renomeando a variável para 'nome'
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Criptografa a senha

// Insere os dados no banco de dados
$sql = "INSERT INTO dados (nome, email, password) VALUES ('$nome', '$email', '$password')"; // Substituindo 'name' por 'nome'

if ($conn->query($sql) === TRUE) {
    echo "Cadastro realizado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
