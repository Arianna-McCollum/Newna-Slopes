const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Snowboards' },
    { name: 'Skis' },
    { name: 'Clothing' },
    { name: 'Wax' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Snowboard - Mens',
      description:
        'Burton - Yellow/White Snowboard 2022',
      image: 'snowboard1.jpeg',
      category: categories[0]._id,
      price: 600,
      quantity: 500
    },
    {
      name: 'Snowboard - Mens',
      description:
        'K2 - Black/Red Snowboard 2022',
      image: 'snowboard2.jpeg',
      category: categories[0]._id,
      price: 300,
      quantity: 500
    },
    {
      name: 'Snowboard - Mens',
      description:
        'Rossignol - White Wide Snowboard',
      image: 'snowboard3.jpeg',
      category: categories[0]._id,
      price: 300,
      quantity: 500
    },
    {
      name: 'Snowboard - Womens',
      description:
        'Rossignol - Myth Womens Snowboard 2022',
      image: 'snowboard4.jpeg',
      category: categories[0]._id,
      price: 350,
      quantity: 500
    },
    {
      name: 'Snowboard - Kids',
      description:
        'Burton - Chopper Boys Snowboard',
      image: 'snowboard5.jpeg',
      category: categories[0]._id,
      price: 200,
      quantity: 500
    },
    {
      name: 'Skis - Mens',
      description:
        'Line - Honey Badger Skis 2022',
      image: 'skis3.jpeg',
      category: categories[1]._id,
      price: 450,
      quantity: 500
    },
    {
      name: 'Skis',
      description:
        'Armada - ARV 96 Skis 2022',
      image: 'skis4.jpeg',
      category: categories[1]._id,
      price: 550,
      quantity: 500
    },
    {
      name: 'Skis - Mens',
      description:
        'Dynastar - Speed Zone 4x4 82 Pro Skis with SPX 12 Konect GW Bindings',
      image: 'skis2.jpeg',
      category: categories[1]._id,
      price: 300,
      quantity: 500
    },
    {
      name: 'Skis - Womens',
      description:
        'Rossignol - Experience 76 Womens Skis with Xpress 10 GW Bindings 2022',
      image: 'skis5.jpeg',
      category: categories[1]._id,
      price: 380,
      quantity: 500
    },
    {
      name: 'Skis (Kids)',
      description:
        'Launch QT Kids Skis with EL 4.5 GW Shift Bindings',
      image: 'skis1.jpeg',
      category: categories[1]._id,
      price: 120,
      quantity: 500
    },
    {
      name: 'Jacket',
      category: categories[2]._id,
      description:
        'Alpha 3.0 Mens Insulated Ski Jacket 2022',
      image: 'jacket.jpeg',
      price: 55,
      quantity: 20
    },
    {
      name: 'Pants',
      category: categories[2]._id,
      description:
        'Legendary Insulated Mens Ski Pants 2022',
      image: 'pants.jpeg',
      price: 65,
      quantity: 20
    },
    {
      name: 'Gloves',
      category: categories[2]._id,
      description:
        'Hestra - Heli Gloves 2022',
      image: 'gloves.jpeg',
      price: 40,
      quantity: 20
    },
    {
      name: 'Socks',
      category: categories[2]._id,
      description:
        "SmartWool - PhD Ski Medium Ski Socks 2022",
      image: 'socks.jpeg',
      price: 25,
      quantity: 30
    },
    {
      name: 'Beanie',
      category: categories[2]._id,
      description:
        'CandyGrind - Embassy Beanie Hat',
      image: 'beanie.jpeg',
      price: 30,
      quantity: 30
    },
    {
      name: 'Hoodie',
      category: categories[2]._id,
      description:
        'Armada - Multiply Mens Hoodie',
      image: 'hoodie.jpeg',
      price: 40,
      quantity: 100
    },
    {
      name: 'Goggles',
      category: categories[2]._id,
      description: 'Oakley - Flight Deck L Prizm Goggles 2022',
      image: 'goggles.jpeg',
      price: 75,
      quantity: 1000
    },
    {
      name: 'Wax - Universal',
      category: categories[3]._id,
      description:
        'Swix - Universal glide wax',
      image: 'wax1.jpeg',
      price: 8,
      quantity: 100
    },
    {
      name: 'Wax - Blue',
      category: categories[3]._id,
      description:
        'Swix - Blue Wax',
      image: 'wax2.jpeg',
      price: 10,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Michael',
    lastName: 'Astalos',
    email: 'michaeldont@gmail.com',
    password: 'Robotman1',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});
