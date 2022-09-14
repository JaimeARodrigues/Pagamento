import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const Faq = () => {
  return (
    <>
      <div className="faq-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-accordion">
            <Accordion preExpanded={['a']}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What are my payment options?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <strong>Lofi</strong> is always looking for talented{' '}
                    <a href="#">information</a> security and IT risk management
                    professionals who are dedicated, hard working and looking
                    for a challenge. If you are interested in employment with{' '}
                    <strong>Lofi</strong>, a company who values you and your
                    family, visit our careers page.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can you send me an invoice?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                  </p>
                  <p>
                    Sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                  <ul>
                    <li>a console</li>
                    <li>Two Joy-Con controllers that are detachable</li>
                    <li>
                      A grip that enables you to combine them into a single{' '}
                      <strong>gamepad</strong> for play on the
                    </li>
                    <li>
                      Two straps for turning the Joy-Cons into individual
                      controllers
                    </li>
                    <li>
                      A dock which you can use to connect your console to the
                      television for traditional gameplay
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do you offer a discount for universities and students?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                  </p>
                  <p>
                    Sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I transfer projects from my personal account to my team?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <strong>Lofi</strong> is always looking for talented{' '}
                    <a href="#">information</a> security and IT risk management
                    professionals who are dedicated, hard working and looking
                    for a challenge. If you are interested in employment with{' '}
                    <strong>Lofi</strong>, a company who values you and your
                    family, visit our careers page.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I cancel my plan at any time?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                  </p>
                  <p>
                    Sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                  <ul>
                    <li>a console</li>
                    <li>Two Joy-Con controllers that are detachable</li>
                    <li>
                      A grip that enables you to combine them into a single{' '}
                      <strong>gamepad</strong> for play on the
                    </li>
                    <li>
                      Two straps for turning the Joy-Cons into individual
                      controllers
                    </li>
                    <li>
                      A dock which you can use to connect your console to the
                      television for traditional gameplay
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I cancel my plan at any time?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                  </p>
                  <p>
                    Sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
