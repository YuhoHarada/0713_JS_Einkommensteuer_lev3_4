function personOne() {
    document.getElementById("P2").style.display = "none"
}

function personTwo() {
    document.getElementById("P2").style.display = "block"
}

function checkES() {
    let person = document.getElementById("target").person.value
    let einkommen1 = document.getElementById("einkommen1").value
    let einkommen2 = document.getElementById("einkommen2").value
    let steuer1
    let steuer2
    if (einkommen1 == "") {
        document.getElementById("result").innerHTML = "please input"
        return false
    }
    if (person == "person1") {
        steuer1 = checkJahren(einkommen1)
        if (steuer1 === false) {
            return false
        }
    } else if (person == "person2") {
        steuer1 = checkJahren(einkommen1)
        if (steuer1 === false) {
            return false
        }
        steuer2 = checkJahren(einkommen2)
        steuer1 = (steuer1 + steuer2) / 2
    } else {
        document.getElementById("result").innerHTML = "ERROR"
        return false
    }
    steuer1 = Math.floor(steuer1)
    document.getElementById("result").innerHTML = `Einkommensteuer: € ${steuer1.toLocaleString()},00 / Person`
}

function checkJahren(einkommen) {
    let year = document.getElementById("target").Jahr.value
    if (year == "2020") {
        return ES2020(einkommen)
    } else if (year == "2019") {
        return ES2019(einkommen)
    } else if (year == "2018") {
        return ES2018(einkommen)
    } else {
        document.getElementById("result").innerHTML = "ERROR"
        return false
    }
}

function ES2020(einkommen) {
    let y = 0
    if (einkommen <= 9408) {
        console.log("2020 Falls1")
        return 0
    } else if (einkommen > 9408 && einkommen <= 14532) {
        console.log("2020 Falls2")
        y = (einkommen - 9408) / 10000
        return (972.87 * y + 1400) * y
    } else if (einkommen > 14532 && einkommen <= 57051) {
        console.log("2020 Falls3")
        y = (einkommen - 14532) / 10000
        return (212.02 * y + 2397) * y + 972.79
    } else if (einkommen > 57051 && einkommen <= 270500) {
        console.log("2020 Falls4")
        return 0.42 * einkommen - 8963.74
    } else {
        console.log("2020 Falls5")
        return 0.45 * einkommen - 17078.74
    }
}

function ES2019(einkommen) {
    let y = 0
    if (einkommen <= 9168) {
        console.log("2019 Falls1")
        return 0
    } else if (einkommen > 9168 && einkommen <= 14254) {
        console.log("2019 Falls2")
        y = (einkommen - 9168) / 10000
        return (980.14 * y + 1400) * y
    } else if (einkommen > 14254 && einkommen <= 55960) {
        console.log("2019 Falls3")
        y = (einkommen - 14254) / 10000
        return (216.16 * y + 2397) * y + 965.58
    } else if (einkommen > 55960 && einkommen <= 265326) {
        console.log("2019 Falls4")
        return 0.42 * einkommen - 8780.90
    } else {
        console.log("2019 Falls5")
        return 0.45 * einkommen - 16740.68
    }
}

function ES2018(einkommen) {
    let y = 0
    if (einkommen <= 9000) {
        console.log("2018 Falls1")
        return 0
    } else if (einkommen > 9000 && einkommen <= 13996) {
        console.log("2018 Falls2")
        y = (einkommen - 9000) / 10000
        return (997.80 * y + 1400) * y
    } else if (einkommen > 13996 && einkommen <= 54949) {
        console.log("2018 Falls3")
        y = (einkommen - 13996) / 10000
        return (220.13 * y + 2397) * y + 948.49
    } else if (einkommen > 54949 && einkommen <= 260532) {
        console.log("2018 Falls4")
        return 0.42 * einkommen - 8621.75
    } else {
        console.log("2018 Falls5")
        return 0.45 * einkommen - 16437.70
    }
}