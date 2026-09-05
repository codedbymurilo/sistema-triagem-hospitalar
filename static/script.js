document.getElementById('formTriagem').addEventListener('submit', async (e) => {
    e.preventDefault();

    const relatoTexto = document.getElementById('relato').value.trim();
    const btn = document.getElementById('btnEnviar');
    const estadoAguardando = document.getElementById('estadoAguardando');
    const estadoCarregando = document.getElementById('estadoCarregando');
    const estadoSucesso = document.getElementById('estadoSucesso');
    const painelBorda = document.getElementById('bordaPrioridade');

    if (!relatoTexto) {
        alert('Informe os sintomas do paciente.');
        return;
    }

    estadoAguardando.classList.add('d-none');
    estadoSucesso.classList.add('d-none');
    estadoCarregando.classList.remove('d-none');
    btn.disabled = true;

    try {
        const resposta = await fetch('/triagem/paciente', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ relato_sintomas: relatoTexto })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.erro || 'Erro ao processar triagem.');
        }

        painelBorda.className = "result-box border-start border-5 bg-white shadow-sm";

        if (dados.nivel_prioridade === 'EMERGENCIA') {
            painelBorda.classList.add('border-danger');
        } else if (dados.nivel_prioridade === 'URGENCIA') {
            painelBorda.classList.add('border-warning');
        } else {
            painelBorda.classList.add('border-success');
        }

        document.getElementById('resPrioridade').innerText = dados.nivel_prioridade;
        document.getElementById('resEspecialidade').innerText = dados.especialidade_recomendada;
        document.getElementById('resJustificativa').innerText = dados.justificativa_breve;

        estadoCarregando.classList.add('d-none');
        estadoSucesso.classList.remove('d-none');

    } catch (error) {
        console.error(error);
        alert(error.message || 'Erro crítico ao se conectar ao servidor.');
        estadoCarregando.classList.add('d-none');
        estadoAguardando.classList.remove('d-none');
    } finally {
        btn.disabled = false;
    }
});