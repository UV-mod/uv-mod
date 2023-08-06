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
	 * ```
	 */
	var uv: UV;
}
