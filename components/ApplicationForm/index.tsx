import React from "react"
import classNames from "classnames"
import styles from "./ApplicationForm.module.scss"
import axios from "axios"

interface IContactForm {
	name?: string
	phone?: string
	type?: string
	message?: string
}

const ApplicationForm: React.FC = () => {
	const [optionActive, setOptionActive] = React.useState<string>("")
	const [enable, setEnable] = React.useState<boolean>(true)
	const selectRef = React.useRef<HTMLInputElement>(null)
	const [formData, setFormData] = React.useState<IContactForm>({
		name: "",
		phone: "",
		type: "Строительство дома",
		message: "",
	})

	React.useEffect(() => {
		setOptionActive("Строительство дома")
	}, [])

	const handleChange = (param: string): void => {
		setOptionActive(param)
		setFormData((pre) => ({ ...pre, type: param }))
		selectRef.current && selectRef.current.checked === false
			? (selectRef.current.checked = true)
			: (selectRef.current!.checked = false)
	}
	const handleChangeInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		const field = e.target.id
		const val = e.target.value
		setFormData((pre) => ({ ...pre, [field]: val }))
	}
	const handleOpenContent = (): void => {
		selectRef.current && selectRef.current.checked === false
			? (selectRef.current.checked = true)
			: (selectRef.current!.checked = false)
	}
	const sendForm = async (e: any): Promise<void> => {
		e.preventDefault()
		setEnable(false)
		try {
			await axios.post("/api/contact", formData)
			alert("Сообщение отправлено! Скоро с Вами свяжется наш менеджер!")
			setFormData({
				name: "",
				phone: "",
				type: "Строительство дома",
				message: "",
			})
			setEnable(true)
		} catch (error) {
			throw new Error(`Ошибка отправки формы!!! Code: ${error}`)
		}
	}

	return (
		<form className={styles.form} name='application' onSubmit={sendForm}>
			<div className={styles.form__container}>
				<fieldset className={styles.form__inputContainer}>
					<section className={styles.form__section}>
						<input
							className={styles.form__input}
							type='text'
							name='name'
							id='name'
							placeholder='Имя*'
							minLength={2}
							maxLength={30}
							value={formData.name}
							onChange={handleChangeInput}
							required
						/>
					</section>

					<section className={styles.form__section}>
						<input
							className={styles.form__input}
							type='tel'
							name='phone'
							id='phone'
							placeholder='Телефон*'
							value={formData.phone}
							onChange={handleChangeInput}
							required
						/>
					</section>

					<section className={styles.form__section}>
						<div className={styles.form__select}>
							<div
								className={styles.form__selectTitle}
								onClick={handleOpenContent}>
								{optionActive}
							</div>
							<input
								ref={selectRef}
								id={styles.form__selectId}
								type='checkbox'
							/>
							<label
								className={styles.form__selectBtn}
								htmlFor={styles.form__selectId}></label>
							<div className={styles.form__selectContent}>
								<input
									id={styles.websiteDevelopment}
									className={styles.form__selectInput}
									type='radio'
									name='serviceSelect'
									value='Строительство дома'
								/>
								<label
									onClick={() => handleChange("Строительство дома")}
									htmlFor='homeConstruction'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Строительство дома",
									})}>
									Строительство дома
								</label>
								<input
									id={styles.websitePromotion}
									className={styles.form__selectInput}
									type='radio'
									name='serviceSelect'
									value='Дизайнерское решение'
								/>
								<label
									onClick={() => handleChange("Дизайнерское решение")}
									htmlFor='designDecision'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Дизайнерское решение",
									})}>
									Дизайнерское решение
								</label>
								<input
									id={styles.smmPromotion}
									className={styles.form__selectInput}
									type='radio'
									name='serviceSelect'
									value='Электромонтажные работы'
								/>
								<label
									onClick={() => handleChange("Электромонтажные работы")}
									htmlFor='electricInstalWork'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Электромонтажные работы",
									})}>
									Электромонтажные работы
								</label>
								<input
									id={styles.mobileApps}
									className={styles.form__selectInput}
									type='radio'
									name='serviceSelect'
									value='Сантехнические работы'
								/>
								<label
									onClick={() => handleChange("Сантехнические работы")}
									htmlFor='plumbingWork'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Сантехнические работы",
									})}>
									Сантехнические работы
								</label>
								<input
									id={styles.graphicDesign}
									className={styles.form__selectInput}
									type='radio'
									name='serviceSelect'
									value='Внутренняя отделка'
								/>
								<label
									onClick={() => handleChange("Внутренняя отделка")}
									htmlFor='interiorDecoration'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Внутренняя отделка",
									})}>
									Внутренняя отделка
								</label>
								<input
									id={styles.outdoorAdvertising}
									className={styles.form__selectInput}
									type='radio'
									name='serviceSelect'
									value='Благоустройство территории'
								/>
								<label
									onClick={() => handleChange("Благоустройство территории")}
									htmlFor='landscaping'
									className={classNames(styles.form__selectLabel, {
										[styles.form__selectLabel_active]:
											optionActive === "Благоустройство территории",
									})}>
									Благоустройство территории
								</label>
							</div>
						</div>
					</section>

					<section className={styles.form__section}>
						<input
							className={classNames(
								styles.form__input,
								styles.form__input_size,
							)}
							type='text'
							name='message'
							id='message'
							placeholder='Ваше сообщение'
							value={formData.message}
							onChange={handleChangeInput}
							minLength={2}
							maxLength={200}
						/>
					</section>
				</fieldset>
			</div>
			<fieldset className={styles.form__handlers}>
				<button
					className={styles.form__button}
					type='submit'
					disabled={enable === false}>
					Отправить
				</button>
			</fieldset>
		</form>
	)
}

export default ApplicationForm
