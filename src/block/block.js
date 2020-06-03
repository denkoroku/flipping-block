/**
 * BLOCK: cath-flip
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-cath-flip', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'cath-flip - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'cath-flip — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		cardFront: {type: 'string'},
		cardBack: {type: 'string'}
	},

	edit: ( props ) => {
		// Creates a <p class='wp-block-cgb-block-cath-flip'></p>.
function updateCardFront(event) {
	props.setAttributes({
		cardFront: event.target.value
	});
}

function updateCardBack(event) {
	props.setAttributes({
		cardBack: event.target.value
	});
}
		return (
			<div className={props.className}>
				<div className={"flip-card"}>
					<div className={"flip-card-inner"}>
						<div className={"flip-card-front"}>
							<input
								type="text"
								value={props.attributes.cardFront}
								onChange={updateCardFront}>
							</input>
						</div>
						<div className={"flip-card-back"}>
							<input
								type="text"
								value={props.attributes.cardBack}
								onChange={updateCardBack}>
							</input>
						</div>
					</div>
				</div>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return (
			<div className={props.className}>
				<div className={"flip-card"}>
					<div className={"flip-card-inner"}>
						<div className={"flip-card-front"}>
							{props.attributes.cardFront}
						</div>
						<div className={"flip-card-back"}>{props.attributes.cardBack}</div>
					</div>
				</div>
			</div>
		);
	},
} );
