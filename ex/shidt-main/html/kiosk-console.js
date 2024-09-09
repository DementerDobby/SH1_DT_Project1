const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let products = [];

const displayMenu = () => {
  console.log("-----------키오스크 콘솔 프로그램입니다. -------------");
  console.log("1.상품입력 2.전체출력 3.검색 4.수정 5.삭제 6.종료");
  rl.question("입력하세요 : ", handleMenuChoice);
};

const handleMenuChoice = (choice) => {
  switch (choice) {
    case "1":
      addProduct();
      break;
    case "2":
      displayAllProducts();
      break;
    case "3":
      searchProduct();
      break;
    case "4":
      updateProduct();
      break;
    case "5":
      deleteProduct();
      break;
    case "6":
      console.log("키오스크 머신이 종료되었습니다.");
      rl.close();
      break;
    default:
      console.log("잘못된 선택입니다.");
      displayMenu();
  }
};

const addProduct = () => {
  rl.question("상품 이름 : ", (name) => {
    rl.question("상품 가격 : ", (price) => {
      rl.question("이미지 이름 : ", (imageName) => {
        products.push({ name, price: parseInt(price), imageName });
        console.log("상품 입력이 완료되었습니다.");
        displayMenu();
      });
    });
  });
};

const displayAllProducts = () => {
  if (products.length === 0) {
    console.log("상품 목록이 없습니다!");
  } else {
    products.forEach((product, index) => {
      console.log(`상품 이름${index + 1} : ${product.name}`);
      console.log(`상품 가격${index + 1} : ${product.price}`);
      console.log(`이미지 이름${index + 1} : ${product.imageName}`);
    });
    console.log("전체 상품출력이 완료되었습니다.");
  }
  displayMenu();
};

const searchProduct = () => {
  rl.question("검색할 상품 이름 : ", (searchQuery) => {
    const results = products.filter((product) =>
      product.name.includes(searchQuery)
    );
    if (results.length === 0) {
      console.log("검색된 상품이 없습니다.");
    } else {
      console.log("검색된 상품 목록");
      results.forEach((product, index) => {
        console.log(`상품 이름${index + 1} : ${product.name}`);
        console.log(`상품 가격${index + 1} : ${product.price}`);
        console.log(`이미지 이름${index + 1} : ${product.imageName}`);
      });
      console.log("검색된 상품이 출력되었습니다.");
    }
    displayMenu();
  });
};

const updateProduct = () => {
  rl.question("수정할 상품 이름 : ", (oldName) => {
    const productIndex = products.findIndex(
      (product) => product.name === oldName
    );
    if (productIndex === -1) {
      console.log("수정할 상품을 찾을 수 없습니다.");
      displayMenu();
      return;
    }

    rl.question("수정할 정보를 입력하세요.\n상품 이름 : ", (newName) => {
      rl.question("상품 가격 : ", (newPrice) => {
        rl.question("이미지 이름 : ", (newImageName) => {
          products[productIndex] = {
            name: newName,
            price: parseInt(newPrice),
            imageName: newImageName,
          };
          console.log("상품 정보가 수정되었습니다.");
          displayMenu();
        });
      });
    });
  });
};

const deleteProduct = () => {
  rl.question("삭제할 상품 이름 : ", (nameToDelete) => {
    const productIndex = products.findIndex(
      (product) => product.name === nameToDelete
    );
    if (productIndex === -1) {
      console.log("삭제할 상품을 찾을 수 없습니다.");
    } else {
      products.splice(productIndex, 1);
      console.log(`${nameToDelete} 상품이 삭제 되었습니다.`);
    }
    displayMenu();
  });
};

// Start the application
displayMenu();
