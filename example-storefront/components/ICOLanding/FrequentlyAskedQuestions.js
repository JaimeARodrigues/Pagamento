import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <div className="ico-faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ico-faq-image">
                <img src="/images/ico-landing-home/faq.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ico-faq-content">
                <h2>Frequently Asked Questions</h2>
                <p>
                  Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi.
                </p>
              </div>
              <div className="ico-faq-accordion accordion">
                <Accordion preExpanded={['a']}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is Lofi ICO?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Curabitur arcu erat accumsan id imperdiet et porttitor
                        at sem. Nulla quis lorem ut libero malesuada feugiat
                        pellentesque in ipsum id orci porta dapibus.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How much does it cost to use Lofi?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Curabitur arcu erat accumsan id imperdiet et porttitor
                        at sem. Nulla quis lorem ut libero malesuada feugiat
                        pellentesque in ipsum id orci porta dapibus.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Who can invest through Lofi?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Curabitur arcu erat accumsan id imperdiet et porttitor
                        at sem. Nulla quis lorem ut libero malesuada feugiat
                        pellentesque in ipsum id orci porta dapibus.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I open a Lofi account?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Curabitur arcu erat accumsan id imperdiet et porttitor
                        at sem. Nulla quis lorem ut libero malesuada feugiat
                        pellentesque in ipsum id orci porta dapibus.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What technology are we
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Curabitur arcu erat accumsan id imperdiet et porttitor
                        at sem. Nulla quis lorem ut libero malesuada feugiat
                        pellentesque in ipsum id orci porta dapibus.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FrequentlyAskedQuestions
