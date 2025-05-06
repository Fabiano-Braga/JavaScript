// Função principal para gerar a tabuada
function Tabuada() {
    const numInput = document.getElementById('txtnum');
    const startRange = document.getElementById('startRange');
    const endRange = document.getElementById('endRange');
    const select = document.getElementById('select');
    const totalSumElement = document.getElementById('totalSum');
    const averageElement = document.getElementById('average');
    
    // Verificar se o campo número está vazio
    if (numInput.value.length === 0) {
        showError('Por favor, digite um número para gerar a tabuada.');
        return;
    }
    
    // Verificar se o intervalo é válido
    const start = parseInt(startRange.value);
    const end = parseInt(endRange.value);
    
    if (start > end) {
        showError('O valor inicial do intervalo não pode ser maior que o valor final.');
        return;
    }
    
    const num = parseFloat(numInput.value);
    select.innerHTML = '';
    
    let sum = 0;
    let count = 0;
    
    // Gerar a tabuada
    for (let i = start; i <= end; i++) {
        const result = num * i;
        sum += result;
        count++;
        
        const option = document.createElement('option');
        // Verifica se o resultado é inteiro para não mostrar decimais
        if (Number.isInteger(result)) {
            option.text = `${num} × ${i} = ${result}`;
        } else {
            option.text = `${num} × ${i} = ${result.toFixed(2)}`;
        }
        option.value = result;
        select.appendChild(option);
    }
    
    // Calcular e exibir estatísticas
    const average = sum / count;
    
    // Formatar soma e média para mostrar decimais apenas quando necessário
    totalSumElement.textContent = Number.isInteger(sum) ? sum : sum.toFixed(2);
    averageElement.textContent = Number.isInteger(average) ? average : average.toFixed(2);
    
    // Adicionar animação
    select.classList.add('animate');
    setTimeout(() => {
        select.classList.remove('animate');
    }, 500);
}

// Função para limpar a tabuada
function clearTable() {
    const select = document.getElementById('select');
    const totalSumElement = document.getElementById('totalSum');
    const averageElement = document.getElementById('average');
    
    select.innerHTML = '<option>Digite um número e clique em Gerar Tabuada</option>';
    totalSumElement.textContent = '-';
    averageElement.textContent = '-';
}

// Função para exibir mensagens de erro
function showError(message) {
    const select = document.getElementById('select');
    select.innerHTML = `<option style="color: var(--danger-color)">${message}</option>`;
    
    // Adicionar animação de erro
    select.classList.add('error-animate');
    setTimeout(() => {
        select.classList.remove('error-animate');
    }, 500);
}

// Atualizar o ano no footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Adicionar evento de tecla para gerar tabuada ao pressionar Enter
document.getElementById('txtnum').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        Tabuada();
    }
});