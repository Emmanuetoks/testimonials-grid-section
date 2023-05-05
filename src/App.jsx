import Card from './components/Card'
import '../CSS/index.css'
import userImg__1 from '/images/image-daniel.jpg'
import userImg__2 from '/images/image-jeanette.jpg'
import userImg__3 from '/images/image-jonathan.jpg'
import userImg__4 from '/images/image-kira.jpg'
import userImg__5 from '/images/image-patrick.jpg'





const App = () => {
  return (
    <div className='container grid'>
      <Card
        image={userImg__1}
        userName={'Daniel Clifford'}
        userStatus={'Verified Graduate'}
        testimonyHeader={'“I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.'}
        userWriteUp={'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a  transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.”'}
        cardNumber={'card--1'}
      />

      <Card
        image={userImg__3}
        userName={'Jonathan Walters'}
        userStatus={'Verified Graduate'}
        testimonyHeader={'An overall wonderful and rewarding experience'}
        userWriteUp={'“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”'}
        cardNumber={'card--3'}
      />

      <Card
        image={userImg__2}
        userName={'Jeanette Hamron'}
        userStatus={'Verified Graduate'}
        testimonyHeader={'  An overall wonderful and rewarding experience'}
        userWriteUp={'“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”'}
        cardNumber={'card--2'}
      />

      <Card
        image={userImg__5}
        userName={'Patrick Abrams'}
        userStatus={'Verified Graduate'}
        testimonyHeader={'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.'}
        userWriteUp={'  “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”'}
        cardNumber={'card--5'}
      />
      <Card
        image={userImg__4}
        userName={'Kira Whittle'}
        userStatus={'Verified Graduate'}
        testimonyHeader={'Such a life-changing experience. Highly recommended!'}
        userWriteUp={'“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”'}
        cardNumber={'card--4'}
      />
    </div>
  )
}

export default App