let users = new Map();
users.set("Apple", "iphone 13 ");
users.set(" Samsung", "Gallaxy flip");
users.set("Huawei", "P50");
users.set("Honor", " 10i");
users.set("LG", " G7 fit");
users.set("Realmi", " GT");
users.set("Xiaomi", " 12T");

for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
}