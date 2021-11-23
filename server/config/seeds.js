const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Climbing Equipment' },
    { name: 'Clothing' },
    { name: 'Misc' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Rope',
      description:
        'Long string like thing.',
      image: 'rope.jpg',
      category: categories[1]._id,
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Canned Coffee',
      description:
        'Smells like coffe, tastes like coffee, it must be coffee.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Toilet Paper',
      category: categories[3]._id,
      description:
        'For all your sanitary needs.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[3]._id,
      description:
        'Not even the mountains are safe from rona.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[3]._id,
      description:
        'Becuase plastic is gross.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[3]._id,
      description:
        "A device that andriods phones haven't mastered yet.",
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Helmet',
      category: categories[1]._id,
      description:
        'If Tony Hawk wears one, so should you.',
      image: 'Helmet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Jacket',
      category: categories[2]._id,
      description:
        'It gets windy a thousand feet above sea level.',
      image: 'Jacket.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Cargo pants',
      category: categories[2]._id,
      description: 'Every good explore has at least 10 pockets.',
      image: 'cargo-pant.jpg',
      price: 19.99,
      quantity: 1000
    },
    {
      name: 'Granola Bar',
      category: categories[0]._id,
      description:
        'Nothing tastes like adventure then a bar of oats.',
      image: 'granola-bar.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Climbing Hooks',
      category: categories[1]._id,
      description:
        'Free climbers think little of you, but you will have the last laugh...',
      image: 'climbing-hooks.jpg',
      price: 9.99,
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
