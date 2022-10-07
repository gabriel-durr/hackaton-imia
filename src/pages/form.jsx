import {Flex, Stack} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";

import axios from "axios";

import {Forms} from "../components/templates/tab1/Forms";
// import {Status} from "../components/templates/tab1/status";
// import {Actions} from "../components/templates/tab1/Actions";

import {ContentPanel} from "../components/ContentPanel";

import {Tabs} from "../components/Tabs";
import {IoExit} from "react-icons/io5";
import {ImEnter, ImPlus, ImCross} from "react-icons/im";
import {BsBezier} from "react-icons/bs";

export default function Form({data}) {
	const [selected, setSelected] = useState("TAB1");

	const onSelected = selected => {
		setSelected(selected);
	};

	return (
		<Flex
			w="100vw"
			h="100vh"
			justify="space-between"
			align="center"
			direction="column">
			<Header />
			<Stack
				h="100%"
				w="100%"
				maxW="container.xl"
				bg="whiteAlpha.800"
				align="center">
				<Tabs
					selected={selected}
					onSelect={onSelected}
					label1="formulários"
					label2="status"
					label3="ações"
					icon1={ImEnter}
					icon2={BsBezier}
					icon3={IoExit}
				/>
				<ContentPanel
					selectedTemplate={selected}
					tab1={<Forms data={data.dataObject} />}
					// tab2={<Status />}
					// tab3={<Actions />}
				/>
			</Stack>
			<Footer />
		</Flex>
	);
}

export async function getServerSideProps() {
	// Fetch data from external API
	let data = await axios
		.get(`https://hackaton-imia.vercel.app/api/main`)
		.then(res => res.data);

	// Pass data to the page via props
	return {props: {data}};
}
