let dataBase = []

function addTableHeader(id, text, ){
    const tableHeader = document.createElement('th')
    tableHeader.innerText = text
    tableHeader.id = id
    return tableHeader
}

function addTableData(id, text, ){
    const tableData = document.createElement('td')
    tableData.id = id
    tableData.innerText = text
    return tableData
}

document.getElementById('register').addEventListener('click', function (event){
    event.preventDefault()

    const form = document.getElementById('data')

    const fullname = document.getElementById('fullname').value
    fullname.id = 'name-'
    fullname.name = 'name'
    const team = document.getElementById('team').value
    team.id = 'team-'
    team.name = 'team'
    
    let data = {name: fullname, team: team}
        if(data.name !== '' && data.team !== ''){
            dataBase.push(data)

            document.getElementById('fullname').value = ''
            document.getElementById('team').value = ''
            console.log(dataBase)
        }else{
            alert('Por favor, preencha os campos!')
        }
})

document.getElementById('create-table').addEventListener('click',function(event){
    event.preventDefault()

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    if(dataBase.length > 0){
        
        const table = document.getElementById('table')

        table.style.width = '50%'
        table.style.borderCollapse = 'collapse'

        const trHeader = document.createElement('tr')
        const thName = addTableHeader('thName', 'Nome',)
        const thTeam = addTableHeader('thTeam', 'Time',)

        trHeader.style.backgroundColor = 'red';
        trHeader.style.color = 'white';
        trHeader.style.textAlign = 'center';

        table.appendChild(trHeader)
        trHeader.append(thName, thTeam)

        dataBase.forEach(function(data, index){
            const trData = document.createElement('tr')
            const tdName = addTableData('td-' + index, data.name)
            const tdTeam = addTableData('td-' + index, data.team)

            tdName.style.border = '1px solid #ddd';
            tdName.style.padding = '8px';
            tdTeam.style.border = '1px solid #ddd';
            tdTeam.style.padding = '8px';

            table.appendChild(trData)
            trData.append(tdName, tdTeam)
        })        

    }else {
        const table = document.getElementById('table')
        const emptyMessage = document.createElement('label')
        emptyMessage.innerText = 'Não há nenhuma informação cadastrada.'
    
        table.appendChild(emptyMessage)    
    }
})

document.getElementById('switch-theme').addEventListener('click', function(event){
    event.preventDefault()

    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
})

const registerBtn = document.getElementById('register');
registerBtn.style.backgroundColor = 'red';
registerBtn.style.border = 'none';
registerBtn.style.color = 'white';
registerBtn.style.padding = '8px 8px';
registerBtn.style.textAlign = 'center';
registerBtn.style.textDecoration = 'none';
registerBtn.style.display = 'inline-block';
registerBtn.style.fontSize = '15px';
registerBtn.style.cursor = 'pointer'

const switchThemeBtn = document.getElementById('switch-theme');
switchThemeBtn.style.backgroundColor = 'red';
switchThemeBtn.style.border = 'none';
switchThemeBtn.style.color = 'white';
switchThemeBtn.style.padding = '8px 8px';
switchThemeBtn.style.textAlign = 'center';
switchThemeBtn.style.textDecoration = 'none';
switchThemeBtn.style.display = 'inline-block';
switchThemeBtn.style.fontSize = '15px';
switchThemeBtn.style.cursor = 'pointer'

const tableBtn = document.getElementById('create-table');
tableBtn.style.backgroundColor = 'red';
tableBtn.style.border = 'none';
tableBtn.style.color = 'white';
tableBtn.style.padding = '8px 8px';
tableBtn.style.textAlign = 'center';
tableBtn.style.textDecoration = 'none';
tableBtn.style.display = 'inline-block';
tableBtn.style.fontSize = '15px';
tableBtn.style.cursor = 'pointer'