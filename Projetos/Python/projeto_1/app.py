#importa a biblioteca "openpyxl"
import openpyxl
#importa a biblioteca "pyperclip"
import pyperclip
#importa a biblioteca "pyautogui"
import pyautogui
from time import sleep

#carrega a planilha
workbook = openpyxl.load_workbook('produtos_ficticios.xlsx')
#seleciona a aba "Produtos" da planilha
pagina = workbook['Produtos']
#percorre a planilha iterando a partir da 2 linha
for linha in pagina.iter_rows(min_row=2):
    nome_produto = linha[0].value
    #copia o valor de "nome_produto"
    pyperclip.copy(nome_produto)
    #pega as cordenadas do click e aplica um delay de 1 segundo
    pyautogui.click(1129,333,duration=1)    
    #aplica o atalho ctrl + v
    pyautogui.hotkey('ctrl','v')
    
    #Descrição
    descricao = linha[1].value
    pyperclip.copy(descricao)
    pyautogui.click(1122,421,duration=1)
    pyautogui.hotkey('ctrl','v')
    
    #Categoria
    categoria = linha[2].value
    pyperclip.copy(categoria)
    pyautogui.click(1123,549,duration=1)
    pyautogui.hotkey('ctrl','v')

    #Código do produto
    codigo_produto = linha[3].value
    pyperclip.copy(codigo_produto)
    pyautogui.click(1124,639,duration=1)
    pyautogui.hotkey('ctrl','v')

    #Peso
    peso = linha[4].value
    pyperclip.copy(peso)
    pyautogui.click(1122,724,duration=1)
    pyautogui.hotkey('ctrl','v')

    #Dimensões
    dimensoes = linha[5].value
    pyperclip.copy(dimensoes)
    pyautogui.click(1111,814,duration=1)
    pyautogui.hotkey('ctrl','v')

    #clica no botão "próximo"
    pyautogui.click(1125,875,duration=1)

    #faz uma pausa de 1 segundos nos clicks
    sleep(1)

    #Preço
    preco = linha[6].value
    pyperclip.copy(preco)
    pyautogui.click(1131,378,duration=1)
    pyautogui.hotkey('ctrl','v')

    #Quantidade em estoque
    quantidade_em_estoque = linha[7].value
    pyperclip.copy(quantidade_em_estoque)
    pyautogui.click(1113,460,duration=1)
    pyautogui.hotkey('ctrl','v')

    #Data de validade
    data_de_validade = linha[8].value
    pyperclip.copy(data_de_validade)
    pyautogui.click(1119,544,duration=1)
    pyautogui.hotkey('ctrl','v')

    #Cor
    cor = linha[9].value
    pyperclip.copy(cor)
    pyautogui.click(1127,634,duration=1)
    pyautogui.hotkey('ctrl','v')

    #Tamanho
    tamanho = linha[10].value
    #Abre as opçõesRoupas
    pyautogui.click(1143,717,duration=1)
    #Escolhe uma das opções a partir de uma condição
    if tamanho == 'Pequeno':
        pyautogui.click(1129,761,duration=1)
    elif tamanho == 'Médio':
        pyautogui.click(1120,777,duration=1)
    else:
        pyautogui.click(1122,793,duration=1)

    #Material
    material = linha[11].value
    pyperclip.copy(material)
    pyautogui.click(1124,808,duration=1)
    pyautogui.hotkey('ctrl','v')

    #clica no botao "próximo"
    pyautogui.click(1116,874,duration=1)
    sleep(1)

    # Fabricante
    fabricante = linha[12].value
    pyperclip.copy(fabricante)
    pyautogui.click(1127,397,duration=1)
    pyautogui.hotkey('ctrl','v')
    
    # País de origem
    pais_origem = linha[13].value
    pyperclip.copy(pais_origem)
    pyautogui.click(1121,479,duration=1)
    pyautogui.hotkey('ctrl','v')

    # Observações
    observacoes = linha[14].value
    pyperclip.copy(observacoes)
    pyautogui.click(1105,565,duration=1)
    pyautogui.hotkey('ctrl','v')

    # Código de barras
    codigo_de_barras = linha[15].value
    pyperclip.copy(codigo_de_barras)
    pyautogui.click(1123,697,duration=1)
    pyautogui.hotkey('ctrl','v')

    # Localização do armazem
    localizacao_armazem = linha[16].value
    pyperclip.copy(localizacao_armazem)
    pyautogui.click(1127,783,duration=1)
    pyautogui.hotkey('ctrl','v')

    #botão "concluir"
    pyautogui.click(1121,843,duration=1)
    
    sleep(1)

    #botão "ok"
    pyautogui.click(1621,181,duration=1)

    sleep(1)

    #botão "add mais um"
    pyautogui.click(1438,598,duration=1)