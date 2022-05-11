import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/global.styled'
import theme from './assets/theme.styled'

import { Section, Wrapper, Title, Subtitle, Icon, Image, Column, Link, Block, SpecTitle, Text, Footer, PlainLink } from './Components/Components.styled'


function App() {

  const sections = [
    { 
      id: 0,
      name: 'hero',
      color: 'blue',
      title: 'Triage is first aid for your inbox.',
      subtitle: 'Everything you loved about the original Triage is back – only better. Download Triage 2 on the App Store today.'
    },
    { 
      id: 1,
      name: 'archive',
      color: 'pink',
      title: 'Drag left to archive',
      subtitle: 'Unread messages appear in a stack of cards, like this.',
      top: true
    },
    { 
      id: 2,
      name: 'keep',
      color: 'black',
      title: 'Drag right to keep',
      subtitle: 'Or create your own custom workflow.',
      top: true
    },
    { 
      id: 3,
      name: 'expand',
      color: 'yellow',
      title: 'Tap to expand',
      subtitle: 'Open the message to view the whole thread.'
    },
    { 
      id: 4,
      name: 'reply',
      color: 'purple',
      title: 'Reply in context',
      subtitle: 'Send a quick reply without leaving the app.'
    },
  ]

  const specs = [
    { 
      id: 0, 
      color: 'blue', 
      icon: './assets/svgs/gmail.svg', 
      title: 'Works with Gmail, iCloud & IMAP' },
    { 
      id: 1, 
      color: 'yellow', 
      icon: './assets/svgs/device.svg', 
      title: 'All processing happens on device' },
    { 
      id: 2, 
      color: 'pink', 
      icon: './assets/svgs/data.svg', 
      title: 'Your data is yours to stay' },
    { 
      id: 3, 
      color: 'black', 
      icon: './assets/svgs/darkmode.svg', 
      title: 'Supports dark mode' },
    { 
      id: 4, 
      color: 'purple', 
      icon: './assets/svgs/free.svg', 
      title: 'Free to use. Or pay for more features.' },
    { 
      id: 5, 
      color: 'white', 
      icon: './assets/svgs/indie.svg', 
      title: 'Built & maintained by indie developers' },
  ]

  const praise = [
    { id: 0, text: 'Since I’ve been using Triage, I’m more caught up on my email than I have been in years.', logo: './assets/svgs/daring-fireball.png' },
    { id: 1, text: "If you're constantly battling to keep your email account at inbox zero, Triage for iOS could be worth a look.", logo: './assets/svgs/the-verge.svg' },
    { id: 2, text: 'Triage makes it feel seamless, and even fun, to achieve — if not Inbox Zero — at least Inbox Zen.', logo: './assets/svgs/macworld.svg' },
    { id: 3, text: 'Triage provides the first aid necessary to get your inbox back in fighting shape.', logo: './assets/svgs/maclife.png' },
    { id: 4, text: 'Triage is a boon to those who have struggled to keep their inboxes clean and organized.', logo: './assets/svgs/clean-email.png' },
    { id: 5, text: 'Triage is my new favorite email app for iPhone.', logo: './assets/svgs/macstories.png' },
  ]

  const footer = [
    {
      id: 0,
      name: 'FAQ',
      url: '#'
    },
    {
      id: 1,
      name: 'Privacy',
      url: '#'
    },
    {
      id: 2,
      name: 'Terms',
      url: '#'
    },
    {
      id: 3,
      name: 'Security',
      url: '#'
    }
  ]

  const rrss = [
    {
      id: 0,
      name: 'mail',
      url: '#'
    },
    {
      id: 1,
      name: 'twitter',
      url: '#'
    }
  ]

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle/>
      <div className="App">
        <main>
          {
            sections.map( section => 
              <Section 
                key={ section.id } 
                className={section.color + ' ' + section.name} 
                padding={ section.top ? '0 0 6rem' : '6rem 0 0' } >

                <Wrapper 
                  className='flex' 
                  direction={ section.id % 2 !== 0 ? 'row-reverse' : 'row' }
                  directionMobile='column'>

                  <Column 
                    paddingRight={ section.id % 2 !== 0 ? '10%' : '' }
                    paddingTop={ section.top ? '6rem' : section.name === 'hero' ? '4.5rem' : '0' }>

                    { 
                      section.name !== 'hero' ?
                      <Icon src={ `./assets/svgs/${section.name}.svg` } /> :
                      <Link className='Hero-link' url="https://apps.apple.com/app/triage-2/id1585295768" title='Download App'>
                        <Icon src={ `./assets/svgs/${section.name}.svg` } />
                      </Link>
                    }

                    <Title>{ section.title }</Title>
                    <Subtitle 
                      className={ section.name === 'hero' ? 'Hero-subtitle' : '' }>
                      { section.subtitle }
                    </Subtitle>

                    { 
                      section.name === 'hero' ?
                      <Link url="https://apps.apple.com/app/triage-2/id1585295768" title='Download on the App Store' >
                        <Image className='Hero-apple' src='./assets/svgs/download.svg'/>
                      </Link> : ''
                    }

                  </Column>
                  <Column paddingMobile={ section.top ? '0 0 3rem' : '3rem 0 0' }>
                    <Image src={ `./assets/${section.name}.png` }/>
                  </Column>
                </Wrapper>
              </Section>
            )
          }
          <Section className='grey' padding='3rem 0'>
            <Wrapper className='grid'>
              {
                specs.map( spec => 
                  <Block key={ spec.id } className={ spec.color }>
                    <Icon src={ spec.icon } />
                    <SpecTitle>{ spec.title }</SpecTitle>
                  </Block>  
                )
              }
            </Wrapper>
          </Section>
          <Section className='white' padding='4rem 0'>
            <Wrapper> <Title className='Praise-title'>Praise for Triage 1</Title> </Wrapper>
            <Wrapper className='grid'>
              {
                praise.map( quote => 
                  <PlainLink href='#' key={ quote.id }>
                    <Block className='Praise'>
                    <Text>{ quote.text }</Text>
                    <Image className={'Praise-image Praise-image-' + quote.id } src={ quote.logo } />
                    </Block>
                  </PlainLink>
                )
              }
            </Wrapper>
          </Section>
        </main>
        <Footer>
          <Section className='white' padding='2rem 0'>
            <Wrapper className='flex' justify='center'>
              {
                footer.map( link  =>
                  <PlainLink 
                    key={ link.id } 
                    href={ link.url } 
                    title={link.name} 
                    className='Footer-link'>{ link.name }</PlainLink>
                )
              }
            </Wrapper>
            <Wrapper className='flex' justify='center'>
              {
                rrss.map( link  =>
                  <PlainLink 
                    key={ link.id } 
                    href={ link.url } 
                    title={link.name} 
                    className='Footer-link'>
                      <Icon className='Footer-icon' src={`./assets/svgs/${link.name}.svg`} ></Icon>
                    </PlainLink>
                )
              }
            </Wrapper>
          </Section>
        </Footer>
      </div>
    </ThemeProvider>
  )
}

export default App
