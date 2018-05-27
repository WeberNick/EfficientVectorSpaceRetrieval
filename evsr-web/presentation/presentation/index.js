// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Fill,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Layout,
  TableHeader,
  TableBody,
  Image,
  MarkdownSlides,
  Markdown,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import '../prism-atom-dark.css';
import '../assets/custom.css';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Efficient Vector Space Retrieval
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Making Vector Space Retrieval Lightning Fast ⚡
          </Text>
        </Slide>
        <Slide align="center center" transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Agenda
          </Heading>
          <List>
            <ListItem>The Problem</ListItem>
            <ListItem>Implementation</ListItem>
            <ListItem>Additional Feature</ListItem>
            <ListItem>Results</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            The Problem 📝
          </Heading>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            The Problem
          </Heading>
          <List>
            <ListItem>Vanilla Vector Space Model slow</ListItem>
            <ListItem>Faster possibilites ?
              <List>
                <ListItem>
                  Clustering
                </ListItem>
                <ListItem>
                  Tiered Index
                </ListItem>
                <ListItem>
                  Random Projections
                </ListItem>
              </List>
            </ListItem>
            <ListItem>What about retrieval performance ?</ListItem>
            <ListItem>Find tradeoff</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Implementation 💻
          </Heading>
        </Slide>
        <Slide transition={['slide']}>
          <Image src={require('../assets/IR.png')} />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Additional Feature 💡
          </Heading>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Additional Feature
          </Heading>
          <List>
            <ListItem>VSM has a fundamental problem</ListItem>
            <ListItem>Only focuses on term overlap</ListItem>
            <ListItem>Also want to capture semantic relationship between query and documents</ListItem>
            <ListItem><strong>Word Embeddings</strong> to the rescue...</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps >
            Results 📊
          </Heading>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Evaluation
            <Text style={{fontSize: '.5em'}}>Index combination</Text>
          </Heading>
          <Table>
            <TableHeader>
              <TableHeaderItem>Vanilla</TableHeaderItem>
              <TableHeaderItem>Random Projection</TableHeaderItem>
              <TableHeaderItem>Word Embeddings</TableHeaderItem>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>
                  VSM
                </TableItem>
                <TableItem>
                  VSM_R
                </TableItem>
                <TableItem>
                  VSM_W
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  TieredIndex
                </TableItem>
                <TableItem>
                TieredIndex_R
                </TableItem>
                <TableItem>
                TieredIndex_W
                </TableItem>
              </TableRow><TableRow>
                <TableItem>
                  Cluster
                </TableItem>
                <TableItem>
                Cluster_R
                </TableItem>
                <TableItem>
                Cluster_W
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Evaluation <br />
            <Text style={{fontSize: '.5em'}}>Choose Random projection Dimension</Text>
          </Heading>
        

          <Table>
            <TableHeader>
              <TableHeaderItem>Dimensions</TableHeaderItem>
              <TableHeaderItem>500</TableHeaderItem>
              <TableHeaderItem>5000</TableHeaderItem>
              <TableHeaderItem>10000</TableHeaderItem>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>
                  Runtime
                </TableItem>
                <TableItem>
                  2.8ms
                </TableItem>
                <TableItem>
                  3ms (<span style={{color: '#fbc531'}}>+7%</span>)
                </TableItem>
                <TableItem>
                  4ms (<span style={{color: '#e84118'}}>+33%</span>)
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  nDCG
                </TableItem>
                <TableItem>
                  0.28
                </TableItem>
                <TableItem>
                  0.43(<span style={{color: '#44bd32'}}>+54%</span>)
                </TableItem>
                <TableItem>
                  0.49(<span style={{color: '#fbc531'}}>+14%</span>)
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Text fit style={{marginTop: 50}}>5000 Dimensions results in the best tradeoff between runtime and nDCG</Text>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Evaluation <br />
            <Text style={{fontSize: '.5em'}}>Choose Tier size</Text>
          </Heading>
        

          <Table>
            <TableHeader>
              <TableHeaderItem>Tiers</TableHeaderItem>
              <TableHeaderItem>10</TableHeaderItem>
              <TableHeaderItem>25</TableHeaderItem>
              <TableHeaderItem>50</TableHeaderItem>
              <TableHeaderItem>100</TableHeaderItem>
              <TableHeaderItem>250</TableHeaderItem>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>
                  Runtime
                </TableItem>
                <TableItem>
                  34ms
                </TableItem>
                <TableItem>
                  17ms <br />(<span style={{color: '#44bd32'}}>-50%</span>)
                </TableItem>
                <TableItem>
                  11ms <br />(<span style={{color: '#44bd32'}}>-36%</span>)
                </TableItem>
                <TableItem>
                  7ms<br /> (<span style={{color: '#44bd32'}}>-36%</span>)
                </TableItem>
                <TableItem>
                  5ms <br />(<span style={{color: '#44bd32'}}>-29%</span>)
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  nDCG
                </TableItem>
                <TableItem>
                  0.38 
                </TableItem>
                <TableItem>
                  0.43 <br />(<span style={{color: '#44bd32'}}>+13%</span>)
                </TableItem>
                <TableItem>
                  0.42 <br />(<span style={{color: '#fbc531'}}>-2%</span>)
                </TableItem>
                <TableItem>
                  0.43 <br />(<span style={{color: '#44bd32'}}>+2%</span>)
                </TableItem>
                <TableItem>
                  0.42 <br />(<span style={{color: '#fbc531'}}>-2%</span>)
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Text fit style={{marginTop: 50}}>100 Tiers brings the best tradeoff between runtime and nDCG</Text>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Evaluation
            <Text style={{fontSize: '.5em'}}>Queries</Text>
          </Heading>
          <Table>
            <TableHeader>
              <TableHeaderItem>Query Types</TableHeaderItem>
            <TableHeaderItem># of Queries</TableHeaderItem>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>
                  all
                </TableItem>
                <TableItem>
                  3,237
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  titles
                </TableItem>
                <TableItem>
                  1,429
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  non-topic titles
                </TableItem>
                <TableItem>
                  3,237
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  video description
                </TableItem>
                <TableItem>
                  1,016
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  video titles
                </TableItem>
                <TableItem>
                  1,016
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <strong>Total</strong>
                </TableItem>
                <TableItem>
                <strong>9,935</strong>
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Text fit style={{marginTop: 50}}>9 (Index combinations) * 9,935  = 89,415 evaluation results</Text>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Evaluation
            <Text style={{fontSize: '.5em'}}>Runtime performance</Text>
          </Heading>
          <Layout>
            <Fill>
              <Image src={require('../assets/T100D5000_Graph_RNT_VANILLA.png')} />
            </Fill>
            <Fill>
              <Image src={require('../assets/T100D5000_Graph_RNT_RAND.png')} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Evaluation <br />
            <Text style={{fontSize: '.5em'}}>Overview</Text>
          </Heading>
          <Image width={'80%'} src={require('../assets/T100D5000_Graph_ndcg_WITHOUT_W2V.png')} />
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Evaluation
          </Heading>
          <Text>Best index in terms of <br />runtime & retrieval performance tradeoff: <br/>
          <strong>Tiered Index in combination with Random Projections <br/>(with tiers: 100, dimensions: 5000)</strong></Text>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Evaluation
            <Text style={{fontSize: '.5em'}}>Word Embeddings</Text>
          </Heading>
          <List>
            <ListItem>Did Word Embeddings help ? </ListItem>
            <ListItem>Using pre-built Word Embeddings from GloVe project (Stanford NLP)</ListItem>
            <ListItem> Problems:
              <List>
                <ListItem>Word Embeddings were built on non-preprocessed terms...</ListItem>
                <ListItem>...but were applied on preprocessed terms</ListItem>
                <ListItem>Word Embeddings were not domain specific</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Evaluation
            <Text style={{fontSize: '.5em'}}>Word Embeddings</Text>
          </Heading>
          <Image width={'100%'} src={require('../assets/T100D5000_Graph_ndcg_VANILLA_WITH_W2V.png')} />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps >
            Conclusion 🔚
          </Heading>
        </Slide>
        <Slide transition={['slide']}>
          <Heading
            size={6}
            textColor="tertiary"
            caps
            style={{ marginBottom: '100px' }}
          >
            Conclusion
          </Heading>
          <List>
            <ListItem>Tiered Index yields the best tradeoff between runtime and retrieval perfomance</ListItem>
            <ListItem>For additional speed up, one can use Random Projections, with a minimal loss on retrieval perfomance</ListItem>
            <ListItem>Word Embeddings could be improved by
              <List>
                <ListItem>Applying on non-preprocessed terms</ListItem>
                <ListItem>Using domain specific ones</ListItem>
                <ListItem>IDF-weighted average of word vectors</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
