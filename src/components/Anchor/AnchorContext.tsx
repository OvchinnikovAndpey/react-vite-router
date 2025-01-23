import {
	AnchorHTMLAttributes,
	createContext,
	useContext,
	ReactNode,
	ElementType,
} from 'react';

interface AnchorContextProps {
	LinkElement: ElementType;
	ignoreFn?: (link: string) => boolean;
}

const AnchorContext = createContext<AnchorContextProps | undefined>(undefined);

export const AnchorProvider = ({
	children,
	LinkElement,
}: {
	children: ReactNode;
	LinkElement: ElementType;
}) => {
	return (
		<AnchorContext.Provider value={{ LinkElement }}>
			{children}
		</AnchorContext.Provider>
	);
};

export const useAnchor = () => {
	const context = useContext(AnchorContext);
	if (!context) {
		throw new Error('useAnchor must be used within an AnchorProvider');
	}
	return context;
};

export const useLinkProps = (
	link?: string
): AnchorHTMLAttributes<HTMLAnchorElement> => {
	const props: AnchorHTMLAttributes<HTMLAnchorElement> = {};

	if (typeof link === 'string') {
		props.href = link;
	}

	return props;
};
