//array.filter()


// for (let i = 0; i < numeri.length; i++) {
    //     if (i > 2){
        //         const element = numeri[i];
        //         console.log(element);
        //     }
        // }
        

        const numeri = [
            {nome:"mauro"},
            {nome:"carlos"},
            {nome:"giovanni"},

        ];
        //anonymous function: argomento del foreach
        numeri.forEach(function(x){
            //console.log(x.nome);
        });
        //arrow function //java: lambda expression ->
        //numeri.forEach( x => console.log(x.nome.length) );
        numeri
            .filter( x => x.nome.length === 5 )
            .forEach( x => console.log(x.nome) ) ;