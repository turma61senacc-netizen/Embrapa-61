<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$nomeUsuario = $_SESSION['nome_usuario'] ?? 'Fulano da Silva Rodrigues';
$cargoUsuario = strtolower($_SESSION['cargo_usuario'] ?? 'administrador');
$paginaAtual = basename($_SERVER['PHP_SELF']);

$menusPorCargo = [
    'administrador' => [
        ['texto' => 'Painel Principal', 'icone' => 'icone_painel.png', 'link' => 'administrador_dashboard.php'],
        ['texto' => 'Calendário', 'icone' => 'icone_calendario.png', 'link' => 'administrador_criar-calendario.php'],
        ['texto' => 'Ações', 'icone' => 'icone_acoes.png', 'link' => 'administrador_gestao-acoes.php'],
        ['texto' => 'Empregados', 'icone' => 'icone_empregados.png', 'link' => 'administrador_empregados.php'],
        ['texto' => 'Validadores', 'icone' => 'icone_validadores.png', 'link' => 'administrador_validadores.php'],
    ],
    'pesquisador' => [
        ['texto' => 'Painel Principal', 'icone' => 'icone_painel.png', 'link' => 'pesquisador_dashboard.php'],
        ['texto' => 'Minhas Ações', 'icone' => 'icone_acoes.png', 'link' => 'pesquisador_minhas-acoes.php'],
    ],
    'validador' => [
        ['texto' => 'Painel Principal', 'icone' => 'icone_painel.png', 'link' => 'validador_dashboard.php'],
        ['texto' => 'Validações', 'icone' => 'icone_validacoes.png', 'link' => 'validador_validacoes.php'],
    ],
    'comite' => [
        ['texto' => 'Painel Principal', 'icone' => 'icone_painel.png', 'link' => 'comite_painel-principal.php'],
    ],
];

$nomesCargosExibicao = [
    'administrador' => 'Administrador',
    'pesquisador' => 'Pesquisador',
    'validador' => 'Validador',
    'comite' => 'Comitê',
];

$itensMenuAtual = $menusPorCargo[$cargoUsuario] ?? $menusPorCargo['administrador'];
$nomeCargoFormatado = $nomesCargosExibicao[$cargoUsuario] ?? ucfirst($cargoUsuario);

$tituloPaginaAtual = 'Painel Principal';
foreach ($itensMenuAtual as $item) {
    if ($paginaAtual === $item['link']) {
        $tituloPaginaAtual = $item['texto'];
        break;
    }
}
?>

<menu-embrapa></menu-embrapa>

<template id="template-menu-embrapa">
    <link rel="stylesheet" href="../../public/css/aside.css">

    <header>
        <div class="menu-header--container--superior">
            <div class="menu-header--container--elementos">
                <p class="menu-header--texto--nome" id="menu-header--texto--nome"><?= htmlspecialchars($nomeUsuario) ?></p>
                <p class="menu-header--texto--barra">|</p>
                <p class="menu-header--texto--funcao"><?= htmlspecialchars($nomeCargoFormatado) ?></p>
            </div>

            <p class="menu-header--texto--titulo"><?= htmlspecialchars($tituloPaginaAtual) ?></p>

            <div class="menu-header--container--acoes">
                <a href="notificacoes.php" class="menu-header--link--notificacao">
                    <img src="../../public/imagens/icone_notificacao.png" class="menu-header--icone--notificacao" alt="Notificações">
                </a>
                <a href="../../controller/logout.php" class="menu-header--botao--logout menu-header--texto--botao">Logout</a>
            </div>
        </div>
    </header>

    <aside>
        <nav class="menu-aside--container--menuLateral">
            <div class="menu-aside--container--logoMenuLateral">
                <img src="../../public/imagens/logo_embrapa.png" class="menu-aside--imagem--logo" alt="Logo Embrapa">
            </div>

            <div class="menu-aside--container--opcoesMenu">
                <?php foreach ($itensMenuAtual as $index => $item): ?>
                    <?php
                        $estaAtivo = ($paginaAtual === $item['link']) || ($index === 0 && !in_array($paginaAtual, array_column($itensMenuAtual, 'link')));
                        $classeLink = $estaAtivo ? 'menu-aside--link--ativo' : 'menu-aside--link--inativo';
                    ?>
                    <a href="<?= $item['link'] ?>" class="<?= $classeLink ?>">
                        <img class="menu-aside--icone--link" src="../../public/imagens/<?= $item['icone'] ?>" alt="">
                        <p class="menu-aside--texto--link"><?= $item['texto'] ?></p>
                    </a>
                <?php endforeach; ?>
            </div>
        </nav>
    </aside>
</template>

<script>
    class MenuEmbrapa extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const templateMenu = document.getElementById('template-menu-embrapa');
            shadowRoot.appendChild(templateMenu.content.cloneNode(true));
        }
    }

    if (!customElements.get('menu-embrapa')) {
        customElements.define('menu-embrapa', MenuEmbrapa);
    }
</script>
