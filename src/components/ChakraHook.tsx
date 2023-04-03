import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  Input,
  useBoolean,
  useClipboard,
} from "@chakra-ui/react";

function ChakraHook() {
  const [flag, setFlag] = useBoolean();
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  return (
    <>
      {/* <Heading m="3" onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
        {flag ? "The flag is ON!" : "Hover me to turn ON"}
      </Heading> */}
      <Flex m="4">
        <Input
          p={"4"}
          placeholder="Enter text here..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button onClick={onCopy}> {hasCopied ? "copied" : "copy"}</Button>
      </Flex>
      <Editable placeholder="Paste here">
        <EditablePreview width="100%" />
        <EditableInput />
      </Editable>
    </>
  );
}

export default ChakraHook;
