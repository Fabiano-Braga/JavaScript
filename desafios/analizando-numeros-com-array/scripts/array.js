let num = document.getElementById('txtnum');
        let select = document.getElementById('tab');
        let res = document.getElementById('results-content');
        let valores = [];

        function adicionar() {
            const numero = num.value;
            
            // Verifica se o campo está vazio
            if (numero === "") {
                showToast("Por favor, digite um número antes de adicionar.", "error");
                return;
            }
            
            // Verifica se é um número válido
            if (!isNumero(numero)) {
                if (Number(numero) <= 0) {
                    showToast("Número inválido: O valor deve ser maior que 0.", "error");
                } else if (Number(numero) > 100) {
                    showToast("Número inválido: O valor deve ser menor ou igual a 100.", "error");
                } else {
                    showToast("Por favor, digite um número válido.", "error");
                }
                return;
            }
            
            // Verifica se o número já está na lista
            if (inLista(numero, valores)) {
                showToast(`O número ${numero} já está na lista.`, "warning");
                return;
            }
            
            // Se passar todas as validações, adiciona o número
            valores.push(Number(numero));
            
            // Criar elemento de número
            const numberItem = document.createElement('div');
            numberItem.className = 'number-item';
            numberItem.textContent = numero;
            select.appendChild(numberItem);
            
            // Limpar resultados se houver
            res.innerHTML = '<p class="placeholder">Adicione mais números ou clique em Finalizar para ver os resultados atualizados.</p>';
            
            // Feedback visual
            numberItem.style.transform = 'scale(1.1)';
            setTimeout(() => {
                numberItem.style.transform = 'scale(1)';
            }, 300);
            
            num.value = '';
            num.focus();
        }

        function isNumero(n) {
            return Number(n) > 0 && Number(n) <= 100;
        }

        function inLista(n, lista) {
            return lista.includes(Number(n));
        }

        function finalizar() {
            if (valores.length === 0) {
                showToast('Adicione pelo menos um número para finalizar!', 'error');
                return;
            }
            
            const tot = valores.length;
            const maior = Math.max(...valores);
            const menor = Math.min(...valores);
            const soma = valores.reduce((acc, curr) => acc + curr, 0);
            const media = soma / tot;
            
            res.innerHTML = `
                <div class="result-item animate__animated animate__fadeInUp">
                    <strong>Total de números:</strong> ${tot}
                </div>
                <div class="result-item animate__animated animate__fadeInUp" style="animation-delay: 0.1s">
                    <strong>Maior valor:</strong> ${maior}
                </div>
                <div class="result-item animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
                    <strong>Menor valor:</strong> ${menor}
                </div>
                <div class="result-item animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
                    <strong>Soma dos valores:</strong> ${soma}
                </div>
                <div class="result-item animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
                    <strong>Média dos valores:</strong> ${media.toFixed(2)}
                </div>
            `;
        }

        function Zerar() {
            valores = [];
            select.innerHTML = '';
            res.innerHTML = '<p class="placeholder">Adicione números e clique em Finalizar para ver os resultados.</p>';
            showToast('Lista zerada com sucesso!', 'success');
        }

        // Função para mostrar notificações (toast)
        function showToast(message, type) {
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.textContent = message;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                toast.classList.remove('show');
                toast.classList.add('hide');
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 3000);
        }

        // Adicionar evento de tecla para adicionar com Enter
        num.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                adicionar();
            }
        });