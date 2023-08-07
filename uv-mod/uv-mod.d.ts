type PathLike = string | ArrayBuffer | URL;

export class UV {
	uvRenderer: UVRenderer;

	constructor(): this;

	createRenderer(): UVRenderer;

	add(...components: UVComponent[]): this;

	define(...pathes: PathLike[]): void;

	defineFromMUV(componentName: string, text: string): void;
	/**
	 *
	 * @param componentName
	 * @param path
	 * @deprecated its not working now
	 */
	defineFromMUVFile(componentName: string, path: PathLike): void;

	render(): void;
}

export class UVRenderer {
	constructor();

	async render(file: PathLike): XMLDocument;
}

export class UVComponent {
	constructor() {}

	static async from(xml: XMLDocument): UVComponent;
}

declare global {
	/**
	 * ``` js
	 * // use
	 * uv.define("%componentPath%");
	 * uv.render();
	 * // or
	 * uv.define("%componentPath%", "%componentPath2%", ... , "%componentPathN%");
	 * uv.render();
	 * ```
	 */
	var uv: UV;
}

/**
 * ``` html
 * <!-- example -->
 * <script>
 *   return {
 *     attributes: ["type", ...],
 *     callback: function (name, oldValue, newValue) {
 *          * do some *
 *     }
 *   }
 * </script>
 * ```
 */
interface UVScriptApiReturns {
	observe: {
		attributes: string[];
		callback: (name: string, oldValue: string, newValue: string) => void;
	};
}
interface UVScriptApiMultiMethod {}

function UVScriptApi(multiMethod: UVScriptApiMultiMethod, parentElement: Element, shadow: Element): UVScriptApiReturns?;
