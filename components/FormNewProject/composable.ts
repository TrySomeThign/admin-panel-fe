import * as yup from "yup";
import { regexUrl } from "~/common/regex";
import type { ETypeCategory, IPayloadProject } from "~/store/interfaces";
import { useProjectStore } from "~/store/project";

const useFormNewProject = () => {
  const projectStore = useProjectStore();
  const { categories } = storeToRefs(projectStore);
  const route = useRoute();
  const { type: typeCategory } = route.query;

  const projectImagePreview = ref<string>("");
  const socialInputs = ref<{ id: number; value: string; title: string }[]>([]);
  const optionListSocialPlatform: { title: string }[] = [
    { title: "Github" },
    { title: "Instagram" },
    { title: "LinkedIn" },
    { title: "Behance" },
  ];

  const searchTechValue = ref<string>("");

  const technologiesData = ref<{ id: number; title: string }[]>([
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "Javascript",
    },
    {
      id: 4,
      title: "React",
    },
  ]);

  const handleSearchTech = (title: string) => {
    searchTechValue.value = title;
  };

  const handleAddTechnology = (title: string) => {
    setValues({
      ...values,
      technologies: [...values.technologies, title],
    });
  };

  const { handleSubmit, defineField, errors, values, setValues } =
    useForm<IPayloadProject>({
      initialValues: {
        title: "",
        description: "",
        image: null,
        categoryId: "",
        socials: [],
        technologies: [],
      },
      validationSchema: {
        title: yup.string().required("Title is required"),
        description: yup.string(),
        categoryId: yup.string().required("Type for project is required"),
        image: yup.mixed().required("Image project is required"),
        socials: yup.array(),
        technologies: yup.array().of(yup.string()),
      },
    });
  const [title, titleProps] = defineField("title");
  const [description, descriptionProps] = defineField("description");
  const [categoryId, categoryIdProps] = defineField("categoryId");
  const [image, imageProps] = defineField("image");
  const [socials, socialsProps] = defineField("socials");
  const [technologies, technologiesProps] = defineField("technologies");
  const errorsSocial = ref<{ id: number; title?: string; url?: string }>({
    id: 0,
    title: "",
    url: "",
  });
  const handleChangeImage = (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setValues({
        image: files[0],
      });

      projectImagePreview.value = URL.createObjectURL(files[0]);
    }
  };

  const handleValidateSocialLink = (inputId: number, value: string) => {
    if (!value) {
      errorsSocial.value = {
        id: inputId,
        url: "Url is required",
      };
      return false;
    }

    const isValid = regexUrl.test(value);
    if (!isValid) {
      errorsSocial.value = {
        id: inputId,
        url: "Url miss format",
      };
      return false;
    } else {
      errorsSocial.value = {
        id: 0,
        url: "",
      };
      return true;
    }
  };

  const handleGetAllCategories = async () => {
    try {
      await projectStore.getAllCategories();
    } catch (error) {
      return error;
    }
  };

  const handleCreateProject = handleSubmit(async (values) => {
    try {
      // **** Validate when has input length > 0 ****
      if (socialInputs.value.length > 0) {
        for (const input of socialInputs.value) {
          if (!input.value) {
            errorsSocial.value = {
              id: input.id,
              url: "Url is required",
            };
            return;
          }
        }
      }

      const payload: IPayloadProject = {
        ...values,
        socials: socialInputs.value.map((item) => ({
          title: item.title,
          url: item.value,
        })),
      };
      console.log({ payload });
      console.log(socialInputs.value);
    } catch (error) {
      console.log("Error", error);
    }
  });

  onMounted(() => {
    handleGetAllCategories();
  });

  return {
    title,
    titleProps,
    description,
    descriptionProps,
    categoryId,
    categoryIdProps,
    categories,
    image,
    imageProps,
    socials,
    socialsProps,
    optionListSocialPlatform,
    technologies,
    technologiesProps,
    projectImagePreview,
    values,
    errors,
    socialInputs,
    errorsSocial,
    typeCategory,
    technologiesData,
    searchTechValue,
    handleSearchTech,
    handleAddTechnology,
    handleCreateProject,
    handleValidateSocialLink,
    handleChangeImage,
  };
};

export default useFormNewProject;
