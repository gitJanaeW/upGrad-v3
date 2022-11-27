const { Project } = require('../models');
const sequelize = require('../config/connections');


const projectdata = [
  {
    project_name: 'Making Sure Cats Really Meow',
    subject: 'Science',
    ongoing_status: true,
    abstract: "Do cats really go meow?! Academics have long overlooked this important question.",
    project_url: 'https://docs.google.com/document/d/16oZ18LZFPNL0DvFoOrLV1Qp_nzXBG9DsT1QBVKZTC2Q/edit',
    collab_status: true,
    user_id: 3,
  },
  {
    project_name: 'Cats Rule, Dogs Drool',
    abstract: 'Cats are better than dogs and I can prove it. The evidence is overwhelming.',
    subject: 'Science',
    ongoing_status: true,
    project_url: 'https://docs.google.com/document/d/1ALpDjpF2iQff-Yw8TfVH23M8Jvcletcz3zgwkz_f6ZU/edit?usp=sharing',
    collab_status: true,
    user_id: 1,

  },
  {
    project_name: 'I Love Cats: A Personal Essay',
    abstract: 'They are the best. I love them. We should all love them.',
    subject: 'English',
    ongoing_status: false,
    project_url: 'https://docs.google.com/document/d/1A8k2x9lp4GeDAerw5UDNOTOUvTXzW5Bt5WG7i8YEpLM/edit?usp=sharing',
    collab_status: false,
    user_id: 2
  },
  {
    project_name: 'A Proposal to Not Read During Reading Week',
    abstract: 'I am hoping my professor agrees with me, so please help me make a convincing argument.',
    subject: 'English',
    ongoing_status: true,
    project_url: 'https://docs.google.com/document/d/11bqSKRujB8AOIXxAt3izvcKZmlF2A_MhpgSx9Qvd6iw/edit?usp=sharing',
    collab_status: true,
    user_id: 4
  },
  {
    project_name: 'How Many Licks Does It Take to Get to the Center of a Tootsie Roll?',
    abstract: ' How many licks will it take to reach the center of a tootsie roll? This long-standing question must be answered.',
    subject: 'Science',
    ongoing_status: true,
    project_url: 'https://docs.google.com/document/d/1CAfqqedHKs2ujyAN-G8bnsOnZ47Wrfk1rT1JIer-6wY/edit?usp=sharing',
    collab_status: false,
    user_id: 5
  },
  {
    project_name: 'An Analysis of Kanye West',
    abstract: 'Kanye West is an American rapper, songwriter, record producer, and fashion designer.',
    subject: 'Music',
    ongoing_status: true,
    project_url: 'https://docs.google.com/document/d/1eDw-H9yKbs3HLnjYdcvvKS2lCmgVVlItlIrN6dULa08/edit?usp=sharing',
    collab_status: false,
    user_id: 4
  },
  {
    project_name: 'A Query About Media Queries: Responsive Design at Every Width',
    abstract: 'Are the rigid standards on generic screen sizes in media queries a thing of the past?',
    subject: 'Computer Science',
    ongoing_status: false,
    project_url: 'https://docs.google.com/document/d/1oNcvD1lRuidzQ7mLc2NRH82zBYWtbV-ttcrxOE-vUz8/edit?usp=sharing',
    collab_status: false,
    user_id: 2
  },
  {
    project_name: 'A Story About Elephants',
    abstract: 'A fiction narrative about familial love in the face of adversity.',
    subject: 'English',
    ongoing_status: false,
    project_url: 'https://docs.google.com/document/d/1muJJB8tniDRawfBYDFaTlgfIBrsWU4JLkPQjqV7PcYo/edit?usp=sharing',
    collab_status: true,
    user_id: 5
  },
  {
    project_name: 'Greta Thunburg and Other National Treasures',
    abstract: 'I love the environment. Greta Thunburg loves the environment. She is a national treasure for reasons I will enumerate.',
    subject: 'Environment',
    ongoing_status: true,
    project_url: 'https://docs.google.com/document/d/1iLAVH7HHO6DQ_5k9KnBbqzVG5MV1El9hrS2VMy8POOc/edit?usp=sharing',
    collab_status: true,
    user_id: 3
  },
];

const seedPosts = () => Project.bulkCreate(projectdata);

module.exports = seedPosts;
