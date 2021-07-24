import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useHistory } from 'react-router-dom';

import { create as apiCreateMedia } from 'api/media';

import Layout from 'components/Layout';
import Button from 'components/Button';

import { Wrapper, Library, DropZone, FileList, FormFooter } from './styled';

export default function Media() {
  const history = useHistory();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  // eslint-disable-next-line no-unused-vars
  const [uploding, setUploading] = useState(false);

  const createMedia = async () => {
    setUploading(true);
    apiCreateMedia(acceptedFiles, (err, resp) => {
      setUploading(false);
      history.push('/media');
    });
  };

  const handleUpload = () => {
    createMedia(files);
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Layout title="Media Library > Upload Media">
      <Wrapper>
        <Library>
          <DropZone {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </DropZone>

          {files && files.length > 0 && (
            <FileList>
              <h5>Files</h5>
              <ul>{files}</ul>
            </FileList>
          )}

          {files && files.length > 0 && (
            <FormFooter>
              <Button type="button" onClick={handleUpload}>
                {uploding ? <span>Uploading..</span> : <span>Upload</span>}
              </Button>
            </FormFooter>
          )}
        </Library>
      </Wrapper>
    </Layout>
  );
}
