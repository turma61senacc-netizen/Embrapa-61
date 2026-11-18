<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$nomeUsuario = $_SESSION['nome_usuario'] ?? 'Fulano da Silva Rodrigues';
$cargoUsuario = strtolower($_SESSION['cargo_usuario'] ?? 'administrador');
$paginaAtual = basename($_SERVER['PHP_SELF']);
?>

<menu-embrapa
    nome="<?= htmlspecialchars($nomeUsuario, ENT_QUOTES, 'UTF-8') ?>"
    cargo="<?= htmlspecialchars($cargoUsuario, ENT_QUOTES, 'UTF-8') ?>"
    pagina="<?= htmlspecialchars($paginaAtual, ENT_QUOTES, 'UTF-8') ?>">
</menu-embrapa>

<script src="../../public/js/aside.js"></script>
