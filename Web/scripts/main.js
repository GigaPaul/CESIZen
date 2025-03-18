const json = `{
    "users":[
        {"id":1,"firstName":"Emily","lastName":"Johnson","maidenName":"Smith","age":28,"gender":"female","email":"emily.johnson@x.dummyjson.com","phone":"+81 965-431-3024","username":"emilys","password":"emilyspass","birthDate":"1996-5-30","image":"https://dummyjson.com/icon/emilys/128","bloodGroup":"O-","height":193.24,"weight":63.16,"eyeColor":"Green","hair":{"color":"Brown","type":"Curly"},"ip":"42.48.100.32","address":{"address":"626 Main Street","city":"Phoenix","state":"Mississippi","stateCode":"MS","postalCode":"29112","coordinates":{"lat":-77.16213,"lng":-92.084824},"country":"United States"},"macAddress":"47:fa:41:18:ec:eb","university":"University of Wisconsin--Madison","bank":{"cardExpire":"03/26","cardNumber":"9289760655481815","cardType":"Elo","currency":"CNY","iban":"YPUXISOBI7TTHPK2BR3HAIXL"},"company":{"department":"Engineering","name":"Dooley, Kozey and Cronin","title":"Sales Manager","address":{"address":"263 Tenth Street","city":"San Francisco","state":"Wisconsin","stateCode":"WI","postalCode":"37657","coordinates":{"lat":71.814525,"lng":-161.150263},"country":"United States"}},"ein":"977-175","ssn":"900-590-289","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"admin"},
        {"id":2,"firstName":"Michael","lastName":"Williams","maidenName":"","age":35,"gender":"male","email":"michael.williams@x.dummyjson.com","phone":"+49 258-627-6644","username":"michaelw","password":"michaelwpass","birthDate":"1989-8-10","image":"https://dummyjson.com/icon/michaelw/128","bloodGroup":"B+","height":186.22,"weight":76.32,"eyeColor":"Red","hair":{"color":"Green","type":"Straight"},"ip":"12.13.116.142","address":{"address":"385 Fifth Street","city":"Houston","state":"Alabama","stateCode":"AL","postalCode":"38807","coordinates":{"lat":22.815468,"lng":115.608581},"country":"United States"},"macAddress":"79:15:78:99:60:aa","university":"Ohio State University","bank":{"cardExpire":"02/27","cardNumber":"6737807858721625","cardType":"Elo","currency":"SEK","iban":"83IDT77FWYLCJVR8ISDACFH0"},"company":{"department":"Support","name":"Spinka - Dickinson","title":"Support Specialist","address":{"address":"395 Main Street","city":"Los Angeles","state":"New Hampshire","stateCode":"NH","postalCode":"73442","coordinates":{"lat":79.098326,"lng":-119.624845},"country":"United States"}},"ein":"912-602","ssn":"108-953-962","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"admin"},
        {"id":3,"firstName":"Sophia","lastName":"Brown","maidenName":"","age":42,"gender":"female","email":"sophia.brown@x.dummyjson.com","phone":"+81 210-652-2785","username":"sophiab","password":"sophiabpass","birthDate":"1982-11-6","image":"https://dummyjson.com/icon/sophiab/128","bloodGroup":"O-","height":177.72,"weight":52.6,"eyeColor":"Hazel","hair":{"color":"White","type":"Wavy"},"ip":"214.225.51.195","address":{"address":"1642 Ninth Street","city":"Washington","state":"Alabama","stateCode":"AL","postalCode":"32822","coordinates":{"lat":45.289366,"lng":46.832664},"country":"United States"},"macAddress":"12:a3:d3:6f:5c:5b","university":"Pepperdine University","bank":{"cardExpire":"04/25","cardNumber":"7795895470082859","cardType":"Korean Express","currency":"SEK","iban":"90XYKT83LMM7AARZ8JN958JC"},"company":{"department":"Research and Development","name":"Schiller - Zieme","title":"Accountant","address":{"address":"1896 Washington Street","city":"Dallas","state":"Nevada","stateCode":"NV","postalCode":"88511","coordinates":{"lat":20.086743,"lng":-34.577107},"country":"United States"}},"ein":"963-113","ssn":"638-461-822","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"admin"},
        {"id":4,"firstName":"James","lastName":"Davis","maidenName":"","age":45,"gender":"male","email":"james.davis@x.dummyjson.com","phone":"+49 614-958-9364","username":"jamesd","password":"jamesdpass","birthDate":"1979-5-4","image":"https://dummyjson.com/icon/jamesd/128","bloodGroup":"AB+","height":193.31,"weight":62.1,"eyeColor":"Amber","hair":{"color":"Blonde","type":"Straight"},"ip":"101.118.131.66","address":{"address":"238 Jefferson Street","city":"Seattle","state":"Pennsylvania","stateCode":"PA","postalCode":"68354","coordinates":{"lat":16.782513,"lng":-139.34723},"country":"United States"},"macAddress":"10:7d:df:1f:97:58","university":"University of Southern California","bank":{"cardExpire":"05/29","cardNumber":"5005519846254763","cardType":"Mastercard","currency":"INR","iban":"7N7ZH1PJ8Q4WU1K965HQQR27"},"company":{"department":"Support","name":"Pagac and Sons","title":"Research Analyst","address":{"address":"1622 Lincoln Street","city":"Fort Worth","state":"Pennsylvania","stateCode":"PA","postalCode":"27768","coordinates":{"lat":54.91193,"lng":-79.498328},"country":"United States"}},"ein":"904-810","ssn":"116-951-314","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"admin"},
        {"id":5,"firstName":"Emma","lastName":"Miller","maidenName":"Johnson","age":30,"gender":"female","email":"emma.miller@x.dummyjson.com","phone":"+91 759-776-1614","username":"emmaj","password":"emmajpass","birthDate":"1994-6-13","image":"https://dummyjson.com/icon/emmaj/128","bloodGroup":"AB-","height":192.8,"weight":63.62,"eyeColor":"Green","hair":{"color":"White","type":"Straight"},"ip":"224.126.22.183","address":{"address":"607 Fourth Street","city":"Jacksonville","state":"Colorado","stateCode":"CO","postalCode":"26593","coordinates":{"lat":0.505589,"lng":-157.43281},"country":"United States"},"macAddress":"32:b9:7e:8d:f5:e8","university":"Northeastern University","bank":{"cardExpire":"03/26","cardNumber":"5772950119588627","cardType":"American Express","currency":"CAD","iban":"TAVHURD845KVBTB8W81AQXRY"},"company":{"department":"Human Resources","name":"Graham - Gulgowski","title":"Quality Assurance Engineer","address":{"address":"1460 Sixth Street","city":"San Antonio","state":"Idaho","stateCode":"ID","postalCode":"21965","coordinates":{"lat":44.346545,"lng":-26.944701},"country":"United States"}},"ein":"403-505","ssn":"526-210-885","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"admin"},
        {"id":6,"firstName":"Olivia","lastName":"Wilson","maidenName":"","age":22,"gender":"female","email":"olivia.wilson@x.dummyjson.com","phone":"+91 607-295-6448","username":"oliviaw","password":"oliviawpass","birthDate":"2002-4-20","image":"https://dummyjson.com/icon/oliviaw/128","bloodGroup":"B+","height":182.61,"weight":58,"eyeColor":"Hazel","hair":{"color":"Gray","type":"Curly"},"ip":"249.178.112.207","address":{"address":"547 First Street","city":"Fort Worth","state":"Tennessee","stateCode":"TN","postalCode":"83843","coordinates":{"lat":75.32627,"lng":-26.15285},"country":"United States"},"macAddress":"9c:7f:ea:34:18:19","university":"University of North Carolina--Chapel Hill","bank":{"cardExpire":"05/28","cardNumber":"6771923832947881","cardType":"Diners Club International","currency":"BRL","iban":"V6H0O5OE3Q4JVKWDTYWZABMD"},"company":{"department":"Product Management","name":"Pfannerstill Inc","title":"Research Analyst","address":{"address":"425 Sixth Street","city":"Indianapolis","state":"Oklahoma","stateCode":"OK","postalCode":"74263","coordinates":{"lat":74.986644,"lng":-132.916888},"country":"United States"}},"ein":"921-709","ssn":"836-772-168","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"moderator"},
        {"id":7,"firstName":"Alexander","lastName":"Jones","maidenName":"","age":38,"gender":"male","email":"alexander.jones@x.dummyjson.com","phone":"+61 260-824-4986","username":"alexanderj","password":"alexanderjpass","birthDate":"1986-10-20","image":"https://dummyjson.com/icon/alexanderj/128","bloodGroup":"AB-","height":153.89,"weight":77.42,"eyeColor":"Blue","hair":{"color":"White","type":"Straight"},"ip":"166.204.84.32","address":{"address":"664 Maple Street","city":"Indianapolis","state":"Delaware","stateCode":"DE","postalCode":"86684","coordinates":{"lat":35.289664,"lng":7.063255},"country":"United States"},"macAddress":"d2:64:58:2d:1c:46","university":"University of Illinois--Urbana-Champaign","bank":{"cardExpire":"05/25","cardNumber":"7344951706130140","cardType":"JCB","currency":"EUR","iban":"49V4GVDVMP0MHIDD4VXMQ3A2"},"company":{"department":"Engineering","name":"Dickens - Beahan","title":"Web Developer","address":{"address":"996 Eighth Street","city":"Washington","state":"Kansas","stateCode":"KS","postalCode":"27858","coordinates":{"lat":-75.462366,"lng":-128.025697},"country":"United States"}},"ein":"638-127","ssn":"722-993-925","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"moderator"},
        {"id":8,"firstName":"Ava","lastName":"Taylor","maidenName":"","age":27,"gender":"female","email":"ava.taylor@x.dummyjson.com","phone":"+1 458-853-7877","username":"avat","password":"avatpass","birthDate":"1997-8-25","image":"https://dummyjson.com/icon/avat/128","bloodGroup":"AB-","height":168.47,"weight":57.08,"eyeColor":"Hazel","hair":{"color":"Red","type":"Kinky"},"ip":"150.73.197.233","address":{"address":"1197 First Street","city":"Fort Worth","state":"Rhode Island","stateCode":"RI","postalCode":"24771","coordinates":{"lat":-81.194833,"lng":-87.948158},"country":"United States"},"macAddress":"8d:2e:c2:d6:e7:a8","university":"University of Wisconsin--Madison","bank":{"cardExpire":"01/29","cardNumber":"6412128967460199","cardType":"Maestro","currency":"CNY","iban":"TS66YQ8R16OX7IJKLUONDQHP"},"company":{"department":"Marketing","name":"Nikolaus Inc","title":"Chief Executive Officer","address":{"address":"930 Lincoln Street","city":"Austin","state":"Colorado","stateCode":"CO","postalCode":"47592","coordinates":{"lat":87.970083,"lng":-42.769351},"country":"United States"}},"ein":"297-762","ssn":"257-419-109","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"moderator"},
        {"id":9,"firstName":"Ethan","lastName":"Martinez","maidenName":"","age":33,"gender":"male","email":"ethan.martinez@x.dummyjson.com","phone":"+92 933-608-5081","username":"ethanm","password":"ethanmpass","birthDate":"1991-2-12","image":"https://dummyjson.com/icon/ethanm/128","bloodGroup":"AB+","height":159.19,"weight":68.81,"eyeColor":"Hazel","hair":{"color":"Purple","type":"Curly"},"ip":"63.191.127.71","address":{"address":"466 Pine Street","city":"San Antonio","state":"Louisiana","stateCode":"LA","postalCode":"72360","coordinates":{"lat":74.074918,"lng":-25.312703},"country":"United States"},"macAddress":"59:e:9e:e3:29:da","university":"Syracuse University","bank":{"cardExpire":"02/25","cardNumber":"7183482484317509","cardType":"Visa","currency":"CAD","iban":"CW5U5KS23U7JYD22TVQL7SIH"},"company":{"department":"Support","name":"Gorczany - Gottlieb","title":"Legal Counsel","address":{"address":"1597 Oak Street","city":"Chicago","state":"Florida","stateCode":"FL","postalCode":"28100","coordinates":{"lat":-67.45208,"lng":-23.209886},"country":"United States"}},"ein":"790-434","ssn":"569-650-348","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"moderator"},
        {"id":10,"firstName":"Isabella","lastName":"Anderson","maidenName":"Davis","age":31,"gender":"female","email":"isabella.anderson@x.dummyjson.com","phone":"+49 770-658-4885","username":"isabellad","password":"isabelladpass","birthDate":"1993-6-10","image":"https://dummyjson.com/icon/isabellad/128","bloodGroup":"A-","height":150.56,"weight":50.1,"eyeColor":"Brown","hair":{"color":"Blonde","type":"Curly"},"ip":"114.9.114.205","address":{"address":"1964 Oak Street","city":"New York","state":"Utah","stateCode":"UT","postalCode":"89352","coordinates":{"lat":41.331324,"lng":151.782727},"country":"United States"},"macAddress":"b1:b0:d0:a2:82:80","university":"California Institute of Technology (Caltech)","bank":{"cardExpire":"05/27","cardNumber":"6118714010128731","cardType":"NPS","currency":"CNY","iban":"GBZRGDMKUOTO34HBCI7A986J"},"company":{"department":"Marketing","name":"Pollich - Hilpert","title":"Chief Financial Officer","address":{"address":"1029 Adams Street","city":"San Diego","state":"Maryland","stateCode":"MD","postalCode":"63847","coordinates":{"lat":-25.843393,"lng":-62.692681},"country":"United States"}},"ein":"127-297","ssn":"902-438-728","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"moderator"},
        {"id":500,"firstName":"Paul","lastName":"Vincent","maidenName":"","age":27,"gender":"male","email":"paul.vincent@x.dummyjson.com","phone":"+49 770-658-4885","username":"isabellad","password":"isabelladpass","birthDate":"1998-03-20","image":"https://dummyjson.com/icon/isabellad/128","bloodGroup":"A-","height":150.56,"weight":50.1,"eyeColor":"Brown","hair":{"color":"Blonde","type":"Curly"},"ip":"114.9.114.205","address":{"address":"1964 Oak Street","city":"New York","state":"Utah","stateCode":"UT","postalCode":"89352","coordinates":{"lat":41.331324,"lng":151.782727},"country":"United States"},"macAddress":"b1:b0:d0:a2:82:80","university":"California Institute of Technology (Caltech)","bank":{"cardExpire":"05/27","cardNumber":"6118714010128731","cardType":"NPS","currency":"CNY","iban":"GBZRGDMKUOTO34HBCI7A986J"},"company":{"department":"Marketing","name":"Pollich - Hilpert","title":"Chief Financial Officer","address":{"address":"1029 Adams Street","city":"San Diego","state":"Maryland","stateCode":"MD","postalCode":"63847","coordinates":{"lat":-25.843393,"lng":-62.692681},"country":"United States"}},"ein":"127-297","ssn":"902-438-728","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"},"role":"moderator"}
    ],
    "posts":[
        {"id":1,"title":"His mother had always taught him","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur velit vel massa finibus rhoncus. Duis nisi metus, ornare egestas cursus et, commodo quis augue. Vivamus tincidunt leo tempor lacus bibendum, at feugiat turpis malesuada. Aliquam erat volutpat. Phasellus eu ex mattis, suscipit nisi rhoncus, blandit mauris. Morbi ullamcorper mi quis nisi viverra bibendum. Proin eleifend diam ut dolor efficitur, vel imperdiet orci volutpat. In id tincidunt velit. Sed non maximus neque.\\nDonec faucibus, justo at consectetur hendrerit, enim enim euismod quam, eget eleifend tortor est at enim. Duis at condimentum eros. Cras porta orci non orci accumsan egestas. Aliquam finibus placerat diam, non fringilla libero eleifend ut. Vestibulum bibendum placerat ultrices. Nunc a sem condimentum eros aliquam pellentesque porta vitae nisi. Maecenas nec feugiat justo. Vivamus varius at nibh ut cursus. Nam scelerisque, eros a tempus vestibulum, est diam cursus lorem, ac molestie elit nulla nec mi. Aliquam erat volutpat. Phasellus non ligula quis metus tristique vestibulum. Sed in nunc scelerisque neque placerat pulvinar nec sed sem.\\nPhasellus cursus condimentum sodales. Cras eget mauris posuere, malesuada ex ac, ullamcorper lacus. Fusce blandit arcu ante. Suspendisse eu orci eget velit euismod volutpat. Donec eget rhoncus sapien. Proin augue arcu, laoreet vitae tincidunt eget, imperdiet ac enim. Nunc ipsum ligula, suscipit eleifend quam ac, scelerisque gravida ante. Vivamus elementum accumsan nulla, ut ultrices nisi egestas id. Proin tempus sem id neque luctus faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pretium hendrerit orci, at ultricies sem tincidunt vitae.\\nEtiam porttitor magna eget massa consectetur, eu sollicitudin nunc lacinia. Cras dignissim hendrerit orci et lobortis. Nunc euismod facilisis massa, ut vulputate elit ultricies et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque tincidunt in nunc at lacinia. Maecenas viverra est in fringilla accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\nPhasellus diam purus, fringilla in neque in, venenatis interdum mauris. Phasellus mattis placerat libero nec congue. Morbi viverra risus ut massa varius, iaculis semper mi molestie. Fusce ut lectus mauris. Quisque vitae libero neque. Vestibulum faucibus vehicula mi ac efficitur. Morbi molestie interdum quam ut volutpat. Curabitur ipsum ligula, elementum sed ipsum eget, laoreet varius nisi. Aenean ullamcorper ligula id quam cursus commodo. Nam dapibus ligula id mattis lacinia. Sed viverra ut mauris vel posuere. Aliquam ac nulla non ante varius pretium a non justo. Proin aliquam ut tellus nec tristique. Nunc pulvinar risus sit amet metus blandit, egestas suscipit urna dictum.","tags":["history","american","crime"],"reactions":{"likes":192,"dislikes":25},"views":305,"userId":121},
        {"id":2,"title":"He was an expert but not in a discipline","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur velit vel massa finibus rhoncus. Duis nisi metus, ornare egestas cursus et, commodo quis augue. Vivamus tincidunt leo tempor lacus bibendum, at feugiat turpis malesuada. Aliquam erat volutpat. Phasellus eu ex mattis, suscipit nisi rhoncus, blandit mauris. Morbi ullamcorper mi quis nisi viverra bibendum. Proin eleifend diam ut dolor efficitur, vel imperdiet orci volutpat. In id tincidunt velit. Sed non maximus neque.\\nDonec faucibus, justo at consectetur hendrerit, enim enim euismod quam, eget eleifend tortor est at enim. Duis at condimentum eros. Cras porta orci non orci accumsan egestas. Aliquam finibus placerat diam, non fringilla libero eleifend ut. Vestibulum bibendum placerat ultrices. Nunc a sem condimentum eros aliquam pellentesque porta vitae nisi. Maecenas nec feugiat justo. Vivamus varius at nibh ut cursus. Nam scelerisque, eros a tempus vestibulum, est diam cursus lorem, ac molestie elit nulla nec mi. Aliquam erat volutpat. Phasellus non ligula quis metus tristique vestibulum. Sed in nunc scelerisque neque placerat pulvinar nec sed sem.\\nPhasellus cursus condimentum sodales. Cras eget mauris posuere, malesuada ex ac, ullamcorper lacus. Fusce blandit arcu ante. Suspendisse eu orci eget velit euismod volutpat. Donec eget rhoncus sapien. Proin augue arcu, laoreet vitae tincidunt eget, imperdiet ac enim. Nunc ipsum ligula, suscipit eleifend quam ac, scelerisque gravida ante. Vivamus elementum accumsan nulla, ut ultrices nisi egestas id. Proin tempus sem id neque luctus faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pretium hendrerit orci, at ultricies sem tincidunt vitae.\\nEtiam porttitor magna eget massa consectetur, eu sollicitudin nunc lacinia. Cras dignissim hendrerit orci et lobortis. Nunc euismod facilisis massa, ut vulputate elit ultricies et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque tincidunt in nunc at lacinia. Maecenas viverra est in fringilla accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\nPhasellus diam purus, fringilla in neque in, venenatis interdum mauris. Phasellus mattis placerat libero nec congue. Morbi viverra risus ut massa varius, iaculis semper mi molestie. Fusce ut lectus mauris. Quisque vitae libero neque. Vestibulum faucibus vehicula mi ac efficitur. Morbi molestie interdum quam ut volutpat. Curabitur ipsum ligula, elementum sed ipsum eget, laoreet varius nisi. Aenean ullamcorper ligula id quam cursus commodo. Nam dapibus ligula id mattis lacinia. Sed viverra ut mauris vel posuere. Aliquam ac nulla non ante varius pretium a non justo. Proin aliquam ut tellus nec tristique. Nunc pulvinar risus sit amet metus blandit, egestas suscipit urna dictum.","tags":["french","fiction","english"],"reactions":{"likes":859,"dislikes":32},"views":4884,"userId":91},
        {"id":3,"title":"Dave watched as the forest burned up on the hill.","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur velit vel massa finibus rhoncus. Duis nisi metus, ornare egestas cursus et, commodo quis augue. Vivamus tincidunt leo tempor lacus bibendum, at feugiat turpis malesuada. Aliquam erat volutpat. Phasellus eu ex mattis, suscipit nisi rhoncus, blandit mauris. Morbi ullamcorper mi quis nisi viverra bibendum. Proin eleifend diam ut dolor efficitur, vel imperdiet orci volutpat. In id tincidunt velit. Sed non maximus neque.\\nDonec faucibus, justo at consectetur hendrerit, enim enim euismod quam, eget eleifend tortor est at enim. Duis at condimentum eros. Cras porta orci non orci accumsan egestas. Aliquam finibus placerat diam, non fringilla libero eleifend ut. Vestibulum bibendum placerat ultrices. Nunc a sem condimentum eros aliquam pellentesque porta vitae nisi. Maecenas nec feugiat justo. Vivamus varius at nibh ut cursus. Nam scelerisque, eros a tempus vestibulum, est diam cursus lorem, ac molestie elit nulla nec mi. Aliquam erat volutpat. Phasellus non ligula quis metus tristique vestibulum. Sed in nunc scelerisque neque placerat pulvinar nec sed sem.\\nPhasellus cursus condimentum sodales. Cras eget mauris posuere, malesuada ex ac, ullamcorper lacus. Fusce blandit arcu ante. Suspendisse eu orci eget velit euismod volutpat. Donec eget rhoncus sapien. Proin augue arcu, laoreet vitae tincidunt eget, imperdiet ac enim. Nunc ipsum ligula, suscipit eleifend quam ac, scelerisque gravida ante. Vivamus elementum accumsan nulla, ut ultrices nisi egestas id. Proin tempus sem id neque luctus faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pretium hendrerit orci, at ultricies sem tincidunt vitae.\\nEtiam porttitor magna eget massa consectetur, eu sollicitudin nunc lacinia. Cras dignissim hendrerit orci et lobortis. Nunc euismod facilisis massa, ut vulputate elit ultricies et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque tincidunt in nunc at lacinia. Maecenas viverra est in fringilla accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\nPhasellus diam purus, fringilla in neque in, venenatis interdum mauris. Phasellus mattis placerat libero nec congue. Morbi viverra risus ut massa varius, iaculis semper mi molestie. Fusce ut lectus mauris. Quisque vitae libero neque. Vestibulum faucibus vehicula mi ac efficitur. Morbi molestie interdum quam ut volutpat. Curabitur ipsum ligula, elementum sed ipsum eget, laoreet varius nisi. Aenean ullamcorper ligula id quam cursus commodo. Nam dapibus ligula id mattis lacinia. Sed viverra ut mauris vel posuere. Aliquam ac nulla non ante varius pretium a non justo. Proin aliquam ut tellus nec tristique. Nunc pulvinar risus sit amet metus blandit, egestas suscipit urna dictum.","tags":["magical","history","french"],"reactions":{"likes":1448,"dislikes":39},"views":4152,"userId":16},
        {"id":4,"title":"All he wanted was a candy bar.","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur velit vel massa finibus rhoncus. Duis nisi metus, ornare egestas cursus et, commodo quis augue. Vivamus tincidunt leo tempor lacus bibendum, at feugiat turpis malesuada. Aliquam erat volutpat. Phasellus eu ex mattis, suscipit nisi rhoncus, blandit mauris. Morbi ullamcorper mi quis nisi viverra bibendum. Proin eleifend diam ut dolor efficitur, vel imperdiet orci volutpat. In id tincidunt velit. Sed non maximus neque.\\nDonec faucibus, justo at consectetur hendrerit, enim enim euismod quam, eget eleifend tortor est at enim. Duis at condimentum eros. Cras porta orci non orci accumsan egestas. Aliquam finibus placerat diam, non fringilla libero eleifend ut. Vestibulum bibendum placerat ultrices. Nunc a sem condimentum eros aliquam pellentesque porta vitae nisi. Maecenas nec feugiat justo. Vivamus varius at nibh ut cursus. Nam scelerisque, eros a tempus vestibulum, est diam cursus lorem, ac molestie elit nulla nec mi. Aliquam erat volutpat. Phasellus non ligula quis metus tristique vestibulum. Sed in nunc scelerisque neque placerat pulvinar nec sed sem.\\nPhasellus cursus condimentum sodales. Cras eget mauris posuere, malesuada ex ac, ullamcorper lacus. Fusce blandit arcu ante. Suspendisse eu orci eget velit euismod volutpat. Donec eget rhoncus sapien. Proin augue arcu, laoreet vitae tincidunt eget, imperdiet ac enim. Nunc ipsum ligula, suscipit eleifend quam ac, scelerisque gravida ante. Vivamus elementum accumsan nulla, ut ultrices nisi egestas id. Proin tempus sem id neque luctus faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pretium hendrerit orci, at ultricies sem tincidunt vitae.\\nEtiam porttitor magna eget massa consectetur, eu sollicitudin nunc lacinia. Cras dignissim hendrerit orci et lobortis. Nunc euismod facilisis massa, ut vulputate elit ultricies et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque tincidunt in nunc at lacinia. Maecenas viverra est in fringilla accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\nPhasellus diam purus, fringilla in neque in, venenatis interdum mauris. Phasellus mattis placerat libero nec congue. Morbi viverra risus ut massa varius, iaculis semper mi molestie. Fusce ut lectus mauris. Quisque vitae libero neque. Vestibulum faucibus vehicula mi ac efficitur. Morbi molestie interdum quam ut volutpat. Curabitur ipsum ligula, elementum sed ipsum eget, laoreet varius nisi. Aenean ullamcorper ligula id quam cursus commodo. Nam dapibus ligula id mattis lacinia. Sed viverra ut mauris vel posuere. Aliquam ac nulla non ante varius pretium a non justo. Proin aliquam ut tellus nec tristique. Nunc pulvinar risus sit amet metus blandit, egestas suscipit urna dictum.","tags":["mystery","english","american"],"reactions":{"likes":359,"dislikes":18},"views":4548,"userId":47},
        {"id":5,"title":"Hopes and dreams were dashed that day.","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur velit vel massa finibus rhoncus. Duis nisi metus, ornare egestas cursus et, commodo quis augue. Vivamus tincidunt leo tempor lacus bibendum, at feugiat turpis malesuada. Aliquam erat volutpat. Phasellus eu ex mattis, suscipit nisi rhoncus, blandit mauris. Morbi ullamcorper mi quis nisi viverra bibendum. Proin eleifend diam ut dolor efficitur, vel imperdiet orci volutpat. In id tincidunt velit. Sed non maximus neque.\\nDonec faucibus, justo at consectetur hendrerit, enim enim euismod quam, eget eleifend tortor est at enim. Duis at condimentum eros. Cras porta orci non orci accumsan egestas. Aliquam finibus placerat diam, non fringilla libero eleifend ut. Vestibulum bibendum placerat ultrices. Nunc a sem condimentum eros aliquam pellentesque porta vitae nisi. Maecenas nec feugiat justo. Vivamus varius at nibh ut cursus. Nam scelerisque, eros a tempus vestibulum, est diam cursus lorem, ac molestie elit nulla nec mi. Aliquam erat volutpat. Phasellus non ligula quis metus tristique vestibulum. Sed in nunc scelerisque neque placerat pulvinar nec sed sem.\\nPhasellus cursus condimentum sodales. Cras eget mauris posuere, malesuada ex ac, ullamcorper lacus. Fusce blandit arcu ante. Suspendisse eu orci eget velit euismod volutpat. Donec eget rhoncus sapien. Proin augue arcu, laoreet vitae tincidunt eget, imperdiet ac enim. Nunc ipsum ligula, suscipit eleifend quam ac, scelerisque gravida ante. Vivamus elementum accumsan nulla, ut ultrices nisi egestas id. Proin tempus sem id neque luctus faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pretium hendrerit orci, at ultricies sem tincidunt vitae.\\nEtiam porttitor magna eget massa consectetur, eu sollicitudin nunc lacinia. Cras dignissim hendrerit orci et lobortis. Nunc euismod facilisis massa, ut vulputate elit ultricies et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque tincidunt in nunc at lacinia. Maecenas viverra est in fringilla accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\nPhasellus diam purus, fringilla in neque in, venenatis interdum mauris. Phasellus mattis placerat libero nec congue. Morbi viverra risus ut massa varius, iaculis semper mi molestie. Fusce ut lectus mauris. Quisque vitae libero neque. Vestibulum faucibus vehicula mi ac efficitur. Morbi molestie interdum quam ut volutpat. Curabitur ipsum ligula, elementum sed ipsum eget, laoreet varius nisi. Aenean ullamcorper ligula id quam cursus commodo. Nam dapibus ligula id mattis lacinia. Sed viverra ut mauris vel posuere. Aliquam ac nulla non ante varius pretium a non justo. Proin aliquam ut tellus nec tristique. Nunc pulvinar risus sit amet metus blandit, egestas suscipit urna dictum.","tags":["crime","mystery","love"],"reactions":{"likes":119,"dislikes":30},"views":626,"userId":131},
        {"id":6,"title":"Dave wasn't exactly sure how he had ended up","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur velit vel massa finibus rhoncus. Duis nisi metus, ornare egestas cursus et, commodo quis augue. Vivamus tincidunt leo tempor lacus bibendum, at feugiat turpis malesuada. Aliquam erat volutpat. Phasellus eu ex mattis, suscipit nisi rhoncus, blandit mauris. Morbi ullamcorper mi quis nisi viverra bibendum. Proin eleifend diam ut dolor efficitur, vel imperdiet orci volutpat. In id tincidunt velit. Sed non maximus neque.\\nDonec faucibus, justo at consectetur hendrerit, enim enim euismod quam, eget eleifend tortor est at enim. Duis at condimentum eros. Cras porta orci non orci accumsan egestas. Aliquam finibus placerat diam, non fringilla libero eleifend ut. Vestibulum bibendum placerat ultrices. Nunc a sem condimentum eros aliquam pellentesque porta vitae nisi. Maecenas nec feugiat justo. Vivamus varius at nibh ut cursus. Nam scelerisque, eros a tempus vestibulum, est diam cursus lorem, ac molestie elit nulla nec mi. Aliquam erat volutpat. Phasellus non ligula quis metus tristique vestibulum. Sed in nunc scelerisque neque placerat pulvinar nec sed sem.\\nPhasellus cursus condimentum sodales. Cras eget mauris posuere, malesuada ex ac, ullamcorper lacus. Fusce blandit arcu ante. Suspendisse eu orci eget velit euismod volutpat. Donec eget rhoncus sapien. Proin augue arcu, laoreet vitae tincidunt eget, imperdiet ac enim. Nunc ipsum ligula, suscipit eleifend quam ac, scelerisque gravida ante. Vivamus elementum accumsan nulla, ut ultrices nisi egestas id. Proin tempus sem id neque luctus faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pretium hendrerit orci, at ultricies sem tincidunt vitae.\\nEtiam porttitor magna eget massa consectetur, eu sollicitudin nunc lacinia. Cras dignissim hendrerit orci et lobortis. Nunc euismod facilisis massa, ut vulputate elit ultricies et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque tincidunt in nunc at lacinia. Maecenas viverra est in fringilla accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\nPhasellus diam purus, fringilla in neque in, venenatis interdum mauris. Phasellus mattis placerat libero nec congue. Morbi viverra risus ut massa varius, iaculis semper mi molestie. Fusce ut lectus mauris. Quisque vitae libero neque. Vestibulum faucibus vehicula mi ac efficitur. Morbi molestie interdum quam ut volutpat. Curabitur ipsum ligula, elementum sed ipsum eget, laoreet varius nisi. Aenean ullamcorper ligula id quam cursus commodo. Nam dapibus ligula id mattis lacinia. Sed viverra ut mauris vel posuere. Aliquam ac nulla non ante varius pretium a non justo. Proin aliquam ut tellus nec tristique. Nunc pulvinar risus sit amet metus blandit, egestas suscipit urna dictum.","tags":["english","classic","american"],"reactions":{"likes":15,"dislikes":8},"views":38,"userId":98}]
}`

let src = $(document.currentScript).attr("src").split("/");
let path = "";

for(let i = 0; i < src.length; i++) {
    if(src[i] !== '.' && src[i] !== '..') {
        break;
    }

    path += src[i] + "/";
}


class Post {
    constructor(content) {
        this.id = content.id;
        this.title = content.title;
        this.body = content.body;
        this.content = content;
    }

    CreateElement() {
        let article = document.createElement("article")
        $(article).addClass("col-4 contentResult").data("name", this.title);

        let link = document.createElement("a");
        link.classList.add("card", "shadow-sm", "link-dark", "link-underline-opacity-0")

        let href = path;
        let filter = "";

        if(data.pages.includes(this.content)) {
            href += "Views/content.html";
            filter = "pageContent"
        }
        else {
            href += "Views/respEx.html";
            filter = "exerResp"
        }

        $(article).data("filter", filter)
        href += `?id=${this.id}`;

        link.setAttribute("href", href)
        article.appendChild(link);

        let img = document.createElement("img");
        img.classList.add("card-img-top", "bg-dark");
        img.style.height = "180px";
        link.appendChild(img);

        let body = document.createElement("div");
        body.classList.add("card-body");
        link.appendChild(body);

        let title = document.createElement("h5");
        title.classList.add("card-title", "text-truncate");
        title.innerText = this.title;
        body.appendChild(title);

        let text = document.createElement("p");
        text.classList.add("m-0");
        text.innerText = this.body.slice(0, 123) + "...";
        body.appendChild(text);

        return article;
    }
}

const parsed = JSON.parse(json);

const data = {}
data.users = parsed.users;
data.content = parsed.posts;
data.pages = [];
data.exercices = [];

for(let i = 0; i < data.content.length; i++) {
    if(i % 2 === 0) {
        data.pages.push(data.content[i]);
    }
    else {
        data.exercices.push(data.content[i]);
    }
}





//#region HEADER
const headerHTML = `
<header class="bg-primary py-2">
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <a href="${path}index.html" class="link-light link-underline-opacity-0 me-4">
                <h1 class="m-0">CESIZen</h1>
            </a>


            <div class="d-flex align-items-center">
                <div class="me-4 showIfLoggedIn">
                    <a 
                        href="${path}Views/admin.html" 
                        class="link-light link-underline-opacity-0 fs-3">
                        <i class="bi bi-shield-lock-fill"></i>
                    </a>
                </div>

                <div class="dropdown show me-4 showIfLoggedIn">
                    <a 
                        href="#" 
                        role="button" 
                        id="dropdownNotif" 
                        data-bs-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false" 
                        class="link-light link-underline-opacity-0">
                        <i class="bi bi-bell-fill fs-3"></i>
                    </a>

                    <div class="dropdown-menu bg-light-subtle" style="width:480px " aria-labelledby="dropdownNotif">
                        <div class="container w-75 mb-2">
                            <div class="row">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="fw-bold m-0">Exercice 1</h3>
                                        <p class="m-0">Une nouvelle ressource a été rajoutée à la catégorie <strong>Exercice de respiration</strong>.</p>
                                        <p class="m-0 text-body-tertiary">Découvrez-la maintenant!</p>
                                    </div>
                                </div>                                             
                            </div>
                        </div>

                        <div class="container w-75">
                            <div class="row">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="fw-bold m-0">Exercice 1</h3>
                                        <p class="m-0">Une nouvelle ressource a été rajoutée à la catégorie <strong>Exercice de respiration</strong>.</p>
                                        <p class="m-0 text-body-tertiary">Découvrez-la maintenant!</p>
                                    </div>
                                </div>                                             
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="dropdown show w-auto showIfLoggedIn">
                    <a 
                        href="#" 
                        role="button" 
                        id="dropdownProfile" 
                        data-bs-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false" 
                        class="link-light link-underline-opacity-0 fs-3">
                        <i class="bi bi-person-circle"></i>
                    </a>

                    <div class="dropdown-menu p-0" style="width:260px" aria-labelledby="dropdownProfile">
                        <div class="p-2 d-flex align-items-center">
                            <div class="me-2">
                                <img src="https://dummyjson.com/icon/isabellad/128" class="bg-dark rounded" style="width:64px; height: 64px;">
                            </div>
                            <div>
                                <div class="d-flex justify-content-between w-100>
                                    <p class="m-0">Paul</p>
                                    <a href="${path}Views/profile.html?id=500"><i class="bi bi-gear-fill"></i></a>
                                </div>
                                <p class="text-body-tertiary m-0">Membre depuis 5 mois</p>
                                <a href="?login=false">Se déconnecter</a>
                            </div>                                
                        </div>

                    </div>
                </div>
                <!-- REGISTER -->
                <div class="showIfLoggedOut">
                    <a 
                        href="#"
                        role="button" 
                        data-bs-toggle="modal" 
                        data-bs-target="#loginModal" 
                        class="link-light link-underline-opacity-0 fs-3">
                        <i class="bi bi-door-open-fill"></i>
                    </a>

                    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header text-center bg-primary text-light">
                                    <h5 class="modal-title w-100 loginElt" id="loginModalLabelConnexion">Connexion</h5>
                                    <h5 class="modal-title w-100 signUpElt" id="loginModalLabelInscription">Inscription</h5>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <input type="email" id="loginEmail" placeholder="Adresse email" class="form-control mb-3" required/>
                                        <input type="password" id="loginPassword" placeholder="Mot de passe" class="form-control mb-3" required/>
                                        <input type="password" placeholder="Confirmez le mot de passe" class="form-control signUpElt"/>
                                    </div>

                                    <div class="d-flex justify-content-center mb-3">
                                        <button type="button" class="btn btn-primary w-100 loginElt" id="loginBtn">Se connecter</button>
                                        <button type="button" class="btn btn-primary w-100 signUpElt">S'inscrire</button>
                                    </div>

                                    <div class="loginElt d-flex justify-content-between">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="rememberMeCheck">
                                            <label class="form-check-label" for="rememberMeCheck">Se souvenir de moi</label>
                                        </div>

                                        <a href="#">Mot de passe oublié?</a>
                                    </div>

                                    <div class="text-center  mt-5">
                                        <p class="m-0 loginElt">Pas encore de compte? <a href="#" id="userFormSignUp">Inscrivez-vous maintenant.</a></p>
                                        <p class="m-0 signUpElt">Déjà inscrit? <a href="#" id="userFormLogIn">Connectez-vous maintenant.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </div>                
    </div>
</header>
`;
//#endregion


//#region FOOTER
const footerHTML = `
<footer class="bg-dark text-light py-2">
    <div class="container">
        <div class="row">
        </div>
    </div>
</footer>
`;
//#endregion

const headerElt = $("#page_header")[0];
const footerElt = $("#page_footer")[0];

if(headerElt) {
    let newHeader = $.parseHTML(headerHTML);
    $(headerElt).before(newHeader);
    $(headerElt).remove();
}

if(footerElt) {
    let newFooter = $.parseHTML(footerHTML);
    $(footerElt).before(newFooter);
    $(footerElt).remove();
}


const params = new URLSearchParams(document.location.search);
let hasLoggedInParam = params.get("login");
const hasLoggedIn = hasLoggedInParam === null ? true : hasLoggedInParam === 'true';

$(".showIfLoggedIn").toggleClass("d-none", !hasLoggedIn);
$(".showIfLoggedOut").toggleClass("d-none", hasLoggedIn);

$(".signUpElt").addClass("d-none");

$("#userFormSignUp").on("click", function() {
    $(".signUpElt").removeClass("d-none");
    $(".loginElt").addClass("d-none");
})

$("#userFormLogIn").on("click", function() {
    $(".signUpElt").addClass("d-none");
    $(".loginElt").removeClass("d-none");
})

$("#loginBtn").on("click", LogIn)


function LogIn() {
    let email = $("#loginEmail").val().toLowerCase();
    let password = $("#loginPassword").val();

    if(email !== "paul.vincent.web@gmail.com" || password !== "Motdepasse") {
        // erreur
        return;
    }

    window.location.replace("?");
}
