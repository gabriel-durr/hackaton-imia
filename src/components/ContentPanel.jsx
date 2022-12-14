import {Flex} from "@chakra-ui/react";

export const ContentPanel = ({selectedTemplate, tab1, tab2, tab3}) => {
	const Template = ({selected}) => {
		switch (selected) {
			case "TAB1":
				return tab1;
			case "TAB2":
				return tab2;
			case "TAB3":
				return tab3;
		}
	};

	return (
		<Flex
			h="40rem"
			boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
			w="80rem"
			shadow="dark-lg"
			align="center"
			justify="flex-start"
			p="2rem 1rem"
			overflow="hidden"
			mt="20px"
			direction="column">
			<Template selected={selectedTemplate} />
		</Flex>
	);
};
