function cyrillicToLatin(text) {
    const map = {
        А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'Ye', 
        Ё: 'Yo', Ж: 'J', З: 'Z', И: 'I', Й: 'I', К: 'K', 
        Л: 'L', М: 'M', Н: 'N', О:'O', Ө:'O', П:'P', Р:'R', 
        С: 'S', Т: 'T', У:'U', Ү: 'U', Ф: 'F', Х: 'Kh', 
        Ц: 'Ts', Ч: 'Ch', Ш:'Sh', Щ: 'Shts', Э: 'E', Ю: 'Yu', 
        Я: 'Ya', Ъ: '', Ы: 'I', Ь: '', 
        
        а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'ye', 
        ё: 'yo', ж: 'j', з: 'z', и: 'i', й: 'i', к: 'k', 
        л: 'l', м: 'm', н: 'n', о:'o', ө:'o', п:'p', р:'r', 
        с: 's', т: 't', у:'u', ү: 'u', ф: 'f', х: 'kh', 
        ц: 'ts', ч: 'ch', ш:'sh', щ: 'shts', э: 'e', ю: 'yu', 
        я: 'ya', ъ: '', ы: 'i', ь: '' 
    };
    return text.split('').map(char => map[char] || char).join('');
};

function latinToCyrillic(text) {
    const map = {
        A:'А', B:'Б', C:'С', D:'Д', E:'Э', F:'Ф', G:'Г', H:'Х', 
        I:'Й', J:'Ж', K:'К', L:'Л', M:'М', N:'Н', O:'О', P:'П', 
        Q:'К', R:'Р', S:'С', T:'Т', U:'У', V:'В', W:'В', X:'Кс', 
        Y:'Й', Z:'З', Kh:'Х', Sh:'Ш', Ch:'Ч', Ts:'Ц', Ya:'Я', 
        Ye:'Е', Yo:'Ё', Yu:'Ю', Shts:'Щ',

        a:'а', b:'б', c:'с', d:'д', e:'э', f:'ф', g:'г', h:'х', 
        i:'й', j:'ж', k:'к', l:'л', m:'м', n:'н', o:'о', p:'п', 
        q:'к', r:'р', s:'с', t:'т', u:'у', v:'в', w:'в', x:'кс', 
        y:'й', z:'з', kh:'х', sh:'ш', ch:'ч', ts:'ц', ya:'я', 
        ye:'е', yo:'ё', yu:'ю', shts:'щ'
    };
    return text.split('').map(char => map[char] || char).join('');
};
console.log(cyrillicToLatin('Сайн уу?, уул'));
console.log(latinToCyrillic('Sain uu?, uul'));
