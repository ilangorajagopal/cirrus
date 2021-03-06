import { Flex, VStack } from '@chakra-ui/react';
import Navigation01 from '../components/navigation/Navigation01';
import Header01 from '../components/headers/Header01';
import Features01 from '../components/features/Features01';
import Content01 from '../components/content/Content01';
import Content02 from '../components/content/Content02';
import Pricing01 from '../components/pricing/Pricing01';
import Footer01 from '../components/footers/Footer01';

const Index = () => (
	<VStack w='100vw' spacing={0}>
		<Navigation01 />
		<Header01 />
		<Features01 />
		<Content01 />
		<Content02 />
		<Pricing01 />
		<Footer01 />
		<Flex></Flex>
		<Flex></Flex>
		<Flex></Flex>
	</VStack>
);

export default Index;
