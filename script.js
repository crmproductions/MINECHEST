// Adicionar interatividade ao site
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Adicionar efeito de clique nos blocos do Minecraft
    const minecraftBlocks = document.querySelectorAll('.minecraft-block');
    
    minecraftBlocks.forEach(block => {
        block.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Simular atualização de status dos jogadores
    const playerBlocks = document.querySelectorAll('.player-block');
    
    // Função para simular eliminação/classificação
    function updatePlayerStatus() {
        // Esta função pode ser expandida para conectar com uma API real
        console.log('Sistema de torneio carregado!');
    }

    // Adicionar efeito de hover nos grupos
    const groups = document.querySelectorAll('.group');
    
    groups.forEach(group => {
        group.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        group.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Inicializar sistema
    updatePlayerStatus();

    // Adicionar funcionalidade ao botão de inscrição
    const inscricaoBtn = document.querySelector('.inscricao-btn');
    
    inscricaoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sistema de inscrições em breve! 🎮');
    });
});

// Função para atualizar resultados (pode ser conectada a uma API)
function updateTournamentResults(results) {
    // Implementar lógica para atualizar os resultados do torneio
    console.log('Atualizando resultados:', results);
}

// Função para destacar jogadores classificados
function highlightQualifiedPlayers(qualifiedIds) {
    qualifiedIds.forEach(id => {
        const player = document.querySelector(`[data-player-id="${id}"]`);
        if (player) {
            player.classList.add('qualified');
        }
    });
}

// Função para destacar jogadores eliminados
function highlightEliminatedPlayers(eliminatedIds) {
    eliminatedIds.forEach(id => {
        const player = document.querySelector(`[data-player-id="${id}"]`);
        if (player) {
            player.classList.add('eliminated');
        }
    });
}
