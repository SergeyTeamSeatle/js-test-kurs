const finish = new Date(2000, 1, 1);
let start = new Date();
let count=0

while (finish < start) {
    if (start.getDay() == 5) {
        start.setDate(start.getDate() - 7)
        if (start.getDate()==13)
        {
            count++
        }

    } else
    {
        start.setDate(start.getDate() - 1)
    }

}
console.log("Пятниц 13-ого с 01/01/2000 до сегодня"+count)