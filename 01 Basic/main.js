// basic JS
let nama = 'Raja Syam'
let usia = 23
let tinggiBadan = 172.2
let beratBadan
let pacar = 2

beratBadan = 60

if (pacar == null) {
    pacar = 'Belum punya'
} else {
    pacar = 'udah punya'
}

// switch(pacar){
//     case 1:
//         pacar = 'punya satu pacar'
//         break
//     case 2:
//         pacar = 'punya lebih dari satu pacar'
//         break
//     default:
//         pacar = 'belum punya pacar'
//         break
// }

let saldoAwal = 50000
let saldoTambahan = 80000
const hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

// alert(
//     `Nama saya ${nama} usia saya ${usia} tinggi badan ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}
// `)

// alert(
//     `saldo awal saya sebesar ${saldoAwal} dengan saldo tambahan ${saldoTambahan} jadi saldo akhir saya ${saldoAkhir}`
// )

// Array
let namaGuru = ['Dea ', 'Fikri ']
namaGuru.push('syam ','rizal ')
alert(namaGuru)

// For loop statement
/* i dengan nilai awal 0, akan berhenti ketika 
nilai kurang dari 10 yang dilakukan adalah i + 1 */
for(let i = 1; i <= 10; i = i++){
    console.log('raja syam') // Hasil ada 10
}

// while statement
let i = 0
while (i < 10) { 
    i++
    console.log('raja syam')
}

// do while
do{
    i++
    console.log('raja syam')
} while(i < 10)