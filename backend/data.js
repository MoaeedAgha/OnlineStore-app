import bcryptjs from "bcryptjs";


const data = {

    users: [
        {
        name: 'Moaeed',
        email: 'moaeed.agha@gmail.com',
        password: bcryptjs.hashSync('1234' , 8),
        isAdmin : true,
        },
        {
            name: 'Jahanzaib',
            email: 'jahanzaib@gmail.com',
            password: bcryptjs.hashSync('1234' , 8),
            isAdmin : false,
        }
    ],
    products:[
        {
            name: 'Nike Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 10,
            description: 'High quality product'
        },
        {
            name: 'Addidas Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 100,
            brand: 'Addidas',
            rating: 4,
            numReviews: 15,
            countInStock: 20,
            description: 'High quality product'
        },
        {
            name: 'Nike T-Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 110,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 21,
            countInStock: 30,
            description: 'High quality product'
        },
        {
            name: 'Addidas T-Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 130,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 10,
            description: 'High quality product'
        },
        {
            name: 'Puma',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 140,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 10,
            description: 'High quality product'
        },
        {
            name: 'Puma Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 150,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 10,
            description: 'High quality product'
        },
    ]
};

export default data;