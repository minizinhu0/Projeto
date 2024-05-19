<?php
session_start();

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
$email = $_POST['email']; // Corrigido para email
$password = $_POST['senha']; // Corrigido para senha

// Consulta SQL para verificar as credenciais do usuário
$sql = "SELECT * FROM dados WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // O usuário foi encontrado no banco de dados
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        // Senha correta, inicia a sessão e redireciona para a página protegida
        $_SESSION['email'] = $email;
        header("Location: pagina_protegida.php");
        exit();
    } else {
        // Senha incorreta
        echo "Senha incorreta!";
    }
} else {
    // Usuário não encontrado
    echo "Usuário não encontrado!";
}

$conn->close();
?>
