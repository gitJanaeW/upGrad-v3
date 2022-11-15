const { Project } = require('../models');
const sequelize = require('../config/connections');


const projectdata = [
  {
    project_name: 'Making sure cats really meow',
    subject: 'Science',
    ongoing_status: true,
    abstract: "Do cats really go meow?!",
    project_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    collab_status: true,
    user_id: 1,
  },

  {
    project_name: 'Cats Rule, Dogs Drool.',
    abstract: 'Cats are better than dogs and I can prove it',
    subject: 'Science',
    ongoing_status: true,
    project_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    collab_status: true,
    user_id: 1,

  },

  {
    project_name: 'I love cats!',
    abstract: 'They are the best',
    subject: 'Arts',
    ongoing_status: true,
    project_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    collab_status: true,
    user_id: 2
  },
  // {
  //   project_name: 'Pellentesque eget nunc.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'http://google.ca/nam/nulla/integer.aspx',
  //   collab_status: true,
  //   user_id: 7
  // },
  // {
  //   project_name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'https://stanford.edu/consequat.png',
  //   collab_status: true,
  //   user_id: 4
  // },
  // {
  //   project_name: 'In hac habitasse platea dictumst.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'http://edublogs.org/non/ligula/pellentesque.js',
  //   collab_status: false,
  //   user_id: 1
  // },
  // {
  //   project_name: 'Morbi non quam nec dui luctus rutrum.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'http://ucla.edu/consequat/nulla.html',
  //   collab_status: false,
  //   user_id: 1
  // },
  // {
  //   project_name: 'Duis ac nibh.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
  //   collab_status: true,
  //   user_id: 9
  // },
  // {
  //   project_name: 'Curabitur at ipsum ac tellus semper interdum.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'https://reverbnation.com/ligula/sit.jpg',
  //   collab_status: true,
  //   user_id: 5
  // },
  // {
  //   project_name: 'In hac habitasse platea dictumst.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'http://china.com.cn/lectus/vestibulum.json',
  //   collab_status: true,
  //   user_id: 3
  // },
  // {
  //   project_name: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
  //   collab_status: false,
  //   user_id: 10
  // },
  // {
  //   project_name: 'Donec dapibus.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
  //   collab_status: true,
  //   user_id: 8
  // },
  // {
  //   project_name: 'Nulla tellus.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'https://lycos.com/natoque/penatibus/et.html',
  //   collab_status: false,
  //   user_id: 3
  // },
  // {
  //   project_name: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'https://gmpg.org/lorem.jpg',
  //   collab_status: true,
  //   user_id: 3
  // },
  // {
  //   project_name: 'Vestibulum ante',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'https://paginegialle.it/mattis/egestas.jsp',
  //   collab_status: true,
  //   user_id: 7
  // },
  // {
  //   project_name: 'In hac habitasse platea dictumst.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'http://wikia.com/turpis/eget.jpg',
  //   collab_status: false,
  //   user_id: 6
  // },
  // {
  //   project_name: 'Etiam justo.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'https://shareasale.com/quis.json',
  //   collab_status: false,
  //   user_id: 4
  // },
  // {
  //   project_name: 'Nulla ut erat id mauris vulputate elementum.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
  //   collab_status: true,
  //   user_id: 6
  // },
  // {
  //   project_name: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  //   abstract: 'i am the abstract!',
  //   subject: '',
  //   ongoing_status: true,
  //   project_url: 'https://java.com/at/nibh/in.png',
  //   collab_status: true,
  //   user_id: 7
  // }
];

const seedPosts = () => Project.bulkCreate(projectdata);

module.exports = seedPosts;
