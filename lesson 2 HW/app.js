function filterInput() {

    let value = phoneInput.value.split('')

    //console.log(value)

    filteredValue = [ ]

    for( let i = 0; i<value.length; i++){

        //console.log(value[i], pattern1[i])

        if( value[i] >= '0' && value[i] <= '9' && pattern1[i] == '/','-'){
            filteredValue.push(value[i])
        } else if ( value[i] == pattern1[i] && pattern1[i] != '#') {
            filteredValue.push(value[i])

        } else {
            break
        }
    }
    console.log(filteredValue)
    phoneInput.value = filteredValue.join('')

    //HW1:
    //    collect clean number without the separators - as Array
    //    [ '1' ], [ '2' ].......si tot asa!
} 
let pattern1 = ["#",  "#",  "#", "/", "2", "#",  "#",  "#", "-", "#",  "#",  "#", "-", "#",  "#",]
let pattern = [ "#",  "#",  "#", "/", "2", "#",  "#",  "#", "-", "#",  "#",  "#", "-", "#",  "#",]
let filteredValue = [ ]
// ###/2###-###-##  